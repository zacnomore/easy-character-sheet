import { createAction, props } from '@ngrx/store';
import { SheetResponse } from 'models/sheet.model';

export const save = createAction('[Sheet] Save');
export const load = createAction('[Sheet] Load');
export const sheetReceived = createAction(
  '[Sheet] Received',
  props<{
    sheet: SheetResponse;
  }>()
);

// interface SheetState {}

// const initialState: SheetState = {};
// export const Sheet = createReducer<SheetState>(initialState);

// export const SHEET_FEATURE_NAME = 'sheet';

// export const selectSheetFeature =
//   createFeatureSelector<SheetState>(SHEET_FEATURE_NAME);
