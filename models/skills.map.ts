import { Abilities, Skills } from './stats.model';

const skills: { key: keyof Skills; name: string; type: keyof Abilities }[] = [
  { key: 'acrobatics', name: 'Acrobatics', type: 'dexterity' },
  { key: 'animalHandling', name: 'Animal Handling', type: 'wisdom' },
  { key: 'arcana', name: 'Arcana', type: 'intelligence' },
  { key: 'athletics', name: 'Athletics', type: 'strength' },
  { key: 'deception', name: 'Deception', type: 'charisma' },
  { key: 'history', name: 'History', type: 'intelligence' },
  { key: 'insight', name: 'Insight', type: 'wisdom' },
  { key: 'intimidation', name: 'Intimidation', type: 'charisma' },
  { key: 'investigation', name: 'Investigation', type: 'intelligence' },
  { key: 'medicine', name: 'Medicine', type: 'wisdom' },
  { key: 'nature', name: 'Nature', type: 'intelligence' },
  { key: 'perception', name: 'Perception', type: 'wisdom' },
  { key: 'performance', name: 'Performance', type: 'charisma' },
  { key: 'persuasion', name: 'Persuasion', type: 'charisma' },
  { key: 'religion', name: 'Religion', type: 'intelligence' },
  { key: 'sleightOfHand', name: 'Sleight of Hand', type: 'dexterity' },
  { key: 'stealth', name: 'Stealth', type: 'dexterity' },
  { key: 'survival', name: 'Survival', type: 'wisdom' },
];

export const getName = (targetKey: keyof Skills) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  skills.find(({ key }) => key === targetKey)!.name;

export const getType = (targetKey: keyof Skills) =>
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  skills.find(({ key }) => key === targetKey)!.type;
