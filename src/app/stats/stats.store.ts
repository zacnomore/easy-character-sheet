import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

import { Abilities, Basics, Skills, Skill } from 'models/stats.model';

export const updateBasics = createAction(
  '[Stats] Update Basics',
  props<{ basics: Partial<Basics> }>()
);

export const updateAbilities = createAction(
  '[Stats] Update Abilities',
  props<{ abilities: Partial<Abilities> }>()
);

export const updateSkills = createAction(
  '[Stats] Update Skills',
  props<{ skills: Partial<Skills> }>()
);

export const updateSkill = createAction(
  '[Stats] Update Skill',
  props<{ skill: { key: keyof Skills; value: Partial<Skill> } }>()
);

interface StatsState {
  basics: Basics;
  abilities: Abilities;
  skills: Skills;
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
  skills: Object.fromEntries(
    (<const>[
      'acrobatics',
      'animalHandling',
      'arcana',
      'athletics',
      'deception',
      'history',
      'insight',
      'intimidation',
      'investigation',
      'medicine',
      'nature',
      'perception',
      'performance',
      'persuasion',
      'religion',
      'sleightOfHand',
      'stealth',
      'survival',
    ]).map((k) => [
      k,
      {
        value: 0,
        proficient: false,
      } as Skill,
    ])
  ) as unknown as Skills,
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
  ),
  on(
    updateSkill,
    (state, { skill: { key, value } }): StatsState => ({
      ...state,
      skills: {
        ...state.skills,
        [key]: {
          ...state.skills[key],
          ...value,
        },
      },
    })
  ),
  on(
    updateSkills,
    (state, { skills }): StatsState => ({
      ...state,
      skills: {
        ...state.skills,
        ...skills,
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

export const selectAbilities = createSelector(
  selectStatsFeature,
  (state) => state.abilities
);

export const selectAbility = (name: keyof Abilities) =>
  createSelector(selectAbilities, (abilities) => abilities[name]);

export const selectSkills = createSelector(
  selectStatsFeature,
  (state) => state.skills
);

export const selectSkill = (name: keyof Skills) =>
  createSelector(selectSkills, (skills) => skills[name]);

export const selectSkillValue = (name: keyof Skills) =>
  createSelector(selectSkill(name), (skill) => skill.value);

export const selectSkillProficiency = (name: keyof Skills) =>
  createSelector(selectSkill(name), (skills) => skills.proficient);
