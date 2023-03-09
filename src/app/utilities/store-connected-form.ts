import { FormControl } from '@angular/forms';
import { Action, Store } from '@ngrx/store';
import {
  debounceTime,
  first,
  forkJoin,
  Observable,
  takeUntil,
  tap,
} from 'rxjs';

export function connectToStore<T>(
  control: FormControl<T>,
  source: Observable<T>,
  saveAction: (v: T) => Action,
  store: Store,
  destroy$: Observable<void>
) {
  return forkJoin([
    prefill(control, source),
    listenToChanges(control.valueChanges, saveAction, store),
  ])
    .pipe(takeUntil(destroy$))
    .subscribe();
}

function prefill<T>(control: FormControl<T>, source: Observable<T>) {
  return source.pipe(
    first(),
    tap((value) => control.setValue(value))
  );
}

function listenToChanges<F extends FormControl>(
  valueChanges: F['valueChanges'],
  saveAction: (v: F['value']) => Action,
  store: Store
) {
  return valueChanges.pipe(
    debounceTime(400),
    tap((value) => store.dispatch(saveAction(value)))
  );
}
