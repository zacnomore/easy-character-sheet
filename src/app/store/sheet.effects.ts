/* eslint-disable @ngrx/avoid-combining-selectors */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateSheetRequest, SheetResponse } from 'models/sheet.model';
import {
  combineLatest,
  exhaustMap,
  filter,
  from,
  map,
  switchMap,
  tap,
} from 'rxjs';
import {
  selectAbilities,
  selectBasics,
  updateAbilities,
  updateBasics,
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
            this.store.select(selectAbilities),
          ])
        ),
        exhaustMap(([basics, abilities]) =>
          this.http.post('/api/save/sheet', {
            stats: {
              basics,
              abilities,
            },
          } as CreateSheetRequest)
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
      tap((v) => console.log(v)),
      filter((v: LoadSheetResponse): v is number => typeof v === 'number'),
      exhaustMap((id) => this.http.get<SheetResponse>(`api/load/sheet/${id}`)),
      tap(console.log),
      map((sheet) => sheetReceived({ sheet }))
    );
  });

  sheetReceived$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(sheetReceived),
      switchMap(
        ({
          sheet: {
            stats: { abilities, basics },
          },
        }) => from([updateBasics({ basics }), updateAbilities({ abilities })])
      )
    );
  });
}
