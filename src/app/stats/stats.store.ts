import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

import { Abilities, Basics } from 'models/stats.model';

export const updateBasics = createAction(
  '[Stats] Update Basics',
  props<{ basics: Partial<Basics> }>()
);

export const updateProficiencyBonus = createAction(
  '[Stats] Update Proficiency Bonus',
  props<{ bonus: number }>()
);

export const updateCurrentHitPoints = createAction(
  '[Stats] Update Current Hit Points',
  props<{ currentHitPoints: number }>()
);

export const updateTempHitPoints = createAction(
  '[Stats] Update Temporary Hit Points',
  props<{ temporaryHitPoints: number }>()
);

export const updateRemainingHitDice = createAction(
  '[Stats] Update Remaining Hit Dice',
  props<{ remainingHitDice: number }>()
);

export const updateAbilities = createAction(
  '[Stats] Update Abilities',
  props<{ abilities: Partial<Abilities> }>()
);

interface StatsState {
  basics: Basics;
  currentHitPoints: number;
  temporaryHitPoints: number;
  remainingHitDice: number;
  abilities: Abilities;
}

const initialState: StatsState = {
  basics: {
    alignment: '',
    background: '',
    characterName: '',
    classAndLevel: '',
    experiencePoints: 0,
    playerName: '',
    race: '',
  },
  currentHitPoints: 0,
  temporaryHitPoints: 0,
  remainingHitDice: 0,
  abilities: {
    charisma: 10,
    constitution: 10,
    dexterity: 10,
    intelligence: 10,
    strength: 10,
    wisdom: 10,
  },
};

export const stats = createReducer<StatsState>(
  initialState,
  on(
    updateBasics,
    (state, { basics }): StatsState => ({
      ...state,
      basics: {
        ...state.basics,
        ...basics,
      },
    })
  ),
  on(
    updateCurrentHitPoints,
    (state, { currentHitPoints }): StatsState => ({
      ...state,
      currentHitPoints,
    })
  ),
  on(
    updateTempHitPoints,
    (state, { temporaryHitPoints }): StatsState => ({
      ...state,
      temporaryHitPoints,
    })
  ),
  on(
    updateRemainingHitDice,
    (state, { remainingHitDice }): StatsState => ({
      ...state,
      remainingHitDice,
    })
  ),
  on(
    updateAbilities,
    (state, { abilities }): StatsState => ({
      ...state,
      abilities: {
        ...state.abilities,
        ...abilities,
      },
    })
  )
);

export const STATS_FEATURE_NAME = 'stats';

const selectStatsFeature =
  createFeatureSelector<StatsState>(STATS_FEATURE_NAME);

export const selectBasics = createSelector(
  selectStatsFeature,
  (state) => state.basics
);

export const selectCurrentHitPoints = createSelector(
  selectStatsFeature,
  (state) => state.currentHitPoints
);
export const selectTempHitPoints = createSelector(
  selectStatsFeature,
  (state) => state.temporaryHitPoints
);
export const selectRemainingHitDice = createSelector(
  selectStatsFeature,
  (state) => state.remainingHitDice
);

export const selectCharacterName = createSelector(
  selectBasics,
  (basics) => basics.characterName
);

export const selectClassAndLevel = createSelector(
  selectBasics,
  (basics) => basics.classAndLevel
);

export const selectBackground = createSelector(
  selectBasics,
  (basics) => basics.background
);

export const selectPlayerName = createSelector(
  selectBasics,
  (basics) => basics.playerName
);

export const selectRace = createSelector(selectBasics, (basics) => basics.race);

export const selectAlignment = createSelector(
  selectBasics,
  (basics) => basics.alignment
);

export const selectExperiencePoints = createSelector(
  selectBasics,
  (basics) => basics.experiencePoints
);

const levelXp = [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000,
];

export const selectLevel = createSelector(selectExperiencePoints, (xp) =>
  levelXp.findIndex((requiredXp) => xp < requiredXp)
);

export const selectProficiencyBonus = createSelector(
  selectLevel,
  (level) => Math.floor((level - 1) / 4) + 2
);

export const selectAbilities = createSelector(
  selectStatsFeature,
  (state) => state.abilities
);

export const selectAbility = (name: keyof Abilities) =>
  createSelector(selectAbilities, (abilities) => abilities[name]);

const calculateModifier = (score: number) => Math.floor((score - 10) / 2);

export const selectAbilityModifiers = createSelector(
  selectAbilities,
  (abilities) =>
    Object.fromEntries(
      Object.entries(abilities).map(([key, value]) => [
        key,
        calculateModifier(value),
      ])
    )
);

export const selectAbilityModifier = (name: keyof Abilities) =>
  createSelector(selectAbility(name), (score) => calculateModifier(score));

// TODO
export const selectArmor = createSelector(
  selectAbilityModifier('dexterity'),
  (dexMod) => dexMod + 10
);

// TODO
export const selectInitiative = selectAbilityModifier('dexterity');
