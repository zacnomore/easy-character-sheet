import { Stats } from './stats.model';

interface Sheet {
  stats: Stats;
}
export type CreateSheetRequest = Sheet;

export type SheetResponse = Sheet;
