import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CreateSheetRequest } from 'models/sheet.model';
import { combineLatest, exhaustAll, exhaustMap, switchMap } from 'rxjs';
import { selectAbilities, selectBasics } from '../stats/stats.store';
import { save } from './sheet.store';

@Injectable()
export class SheetEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private http: HttpClient
  ) {}

  loadMovies$ = createEffect(
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
}
