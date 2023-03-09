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

export const updateAbilities = createAction(
  '[Stats] Update Abilities',
  props<{ abilities: Partial<Abilities> }>()
);

interface StatsState {
  basics: Basics;
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

export const selectCharacterName = createSelector(
  selectBasics,
  (basics) => basics.characterName
);

export const selectAbilities = createSelector(
  selectStatsFeature,
  (state) => state.abilities
);

export const selectAbility = (name: keyof Abilities) =>
  createSelector(selectAbilities, (abilities) => abilities[name]);
