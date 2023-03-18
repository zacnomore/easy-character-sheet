import { Abilities } from './stats.model';

const abilities: { key: keyof Abilities; abbreviation: string }[] = [
  { key: 'strength', abbreviation: 'str' },
  { key: 'dexterity', abbreviation: 'dex' },
  { key: 'constitution', abbreviation: 'con' },
  { key: 'intelligence', abbreviation: 'int' },
  { key: 'wisdom', abbreviation: 'wis' },
  { key: 'charisma', abbreviation: 'cha' },
];

export const getAbbreviation = (targetKey: keyof Abilities) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  abilities.find(({ key }) => key === targetKey)!.abbreviation;
