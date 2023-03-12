/* eslint-disable @ngrx/avoid-combining-selectors */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateSheetRequest, SheetResponse } from 'models/sheet.model';
import { combineLatest, exhaustMap, filter, from, map, switchMap } from 'rxjs';
import {
  selectAbilities,
  selectBasics,
  selectCurrentHitPoints,
  selectProficiencyBonus,
  selectRemainingHitDice,
  selectSkillProficiencies,
  selectTempHitPoints,
  updateAbilities,
  updateBasics,
  updateCurrentHitPoints,
  updateProficiencyBonus,
  updateRemainingHitDice,
  updateSkills,
  updateTempHitPoints,
} from '../stats/stats.store';
import { load, save, sheetReceived } from './sheet.store';
import { MatDialog } from '@angular/material/dialog';
import {
  LoadSheetModalComponent,
  LoadSheetResponse,
} from '../load-sheet-modal/load-sheet-modal.component';

@Injectable()
export class SheetEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  save$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(save),
        switchMap(() =>
          combineLatest([
            this.store.select(selectBasics),
            this.store.select(selectProficiencyBonus),
            this.store.select(selectCurrentHitPoints),
            this.store.select(selectTempHitPoints),
            this.store.select(selectRemainingHitDice),
            this.store.select(selectAbilities),
            this.store.select(selectSkillProficiencies),
          ])
        ),
        exhaustMap(
          ([
            basics,
            proficiencyBonus,
            currentHitPoints,
            temporaryHitPoints,
            remainingHitDice,
            abilities,
            skills,
          ]) =>
            this.http.post('/api/save/sheet', {
              stats: {
                basics,
                proficiencyBonus,
                currentHitPoints,
                temporaryHitPoints,
                remainingHitDice,
                abilities,
                skills,
              },
            } satisfies CreateSheetRequest)
        )
      );
    },
    {
      dispatch: false,
    }
  );

  load$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(load),
      exhaustMap(() => this.dialog.open(LoadSheetModalComponent).afterClosed()),
      filter((v: LoadSheetResponse): v is number => typeof v === 'number'),
      exhaustMap((id) => this.http.get<SheetResponse>(`api/load/sheet/${id}`)),
      map((sheet) => sheetReceived({ sheet }))
    );
  });

  sheetReceived$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sheetReceived),
      switchMap(
        ({
          sheet: {
            stats: {
              abilities,
              proficiencyBonus,
              currentHitPoints,
              remainingHitDice,
              temporaryHitPoints,
              basics,
              skills,
            },
          },
        }) =>
          from([
            updateBasics({ basics }),
            updateProficiencyBonus({ bonus: proficiencyBonus }),
            updateCurrentHitPoints({ currentHitPoints }),
            updateRemainingHitDice({ remainingHitDice }),
            updateTempHitPoints({ temporaryHitPoints }),
            updateAbilities({ abilities }),
            updateSkills({ skills }),
          ])
      )
    );
  });
}
