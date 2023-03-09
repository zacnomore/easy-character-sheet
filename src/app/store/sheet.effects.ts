/* eslint-disable @ngrx/avoid-combining-selectors */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateSheetRequest } from 'models/sheet.model';
import { combineLatest, exhaustMap, switchMap } from 'rxjs';
import { selectAbilities, selectBasics } from '../stats/stats.store';
import { load, save } from './sheet.store';
import { MatDialog } from '@angular/material/dialog';
import { LoadSheetModalComponent } from '../load-sheet-modal/load-sheet-modal.component';

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

  load$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(load),
        exhaustMap(() =>
          this.dialog.open(LoadSheetModalComponent).afterClosed()
        )
      );
    },
    { dispatch: false }
  );
}
