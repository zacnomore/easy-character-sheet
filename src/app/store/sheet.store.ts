import { createAction } from '@ngrx/store';

export const save = createAction('[Sheet] Save');
export const load = createAction('[Sheet] Load');

// interface SheetState {}

// const initialState: SheetState = {};
// export const Sheet = createReducer<SheetState>(initialState);

// export const SHEET_FEATURE_NAME = 'sheet';

// export const selectSheetFeature =
//   createFeatureSelector<SheetState>(SHEET_FEATURE_NAME);
