import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { getType } from 'models/skills.map';

import { Abilities, Basics, Skills } from 'models/stats.model';

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

export const updateSkills = createAction(
  '[Stats] Update Skills',
  props<{ skills: Partial<Skills> }>()
);

interface StatsState {
  basics: Basics;
  proficiencyBonus: number;
  currentHitPoints: number;
  temporaryHitPoints: number;
  remainingHitDice: number;
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
  proficiencyBonus: 0,
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
  skills: {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
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
    updateProficiencyBonus,
    (state, { bonus }): StatsState => ({
      ...state,
      proficiencyBonus: bonus,
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

export const selectProficiencyBonus = createSelector(
  selectStatsFeature,
  (state) => state.proficiencyBonus
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

export const selectSkillProficiencies = createSelector(
  selectStatsFeature,
  (state) => state.skills
);

export const selectSkillProficiency = (key: keyof Skills) =>
  createSelector(selectSkillProficiencies, (skills) => skills[key]);

const calculateSkill = (
  modifier: number,
  proficiencyBonus: number,
  proficient: boolean
) => modifier + Number(proficient) * proficiencyBonus;

export const selectSkillValues = createSelector(
  selectSkillProficiencies,
  selectAbilityModifiers,
  selectProficiencyBonus,
  (skills, modifiers, bonus) =>
    Object.fromEntries(
      (Object.entries(skills) as [keyof Skills, boolean][]).map(
        ([key, proficient]) => [
          key,
          calculateSkill(modifiers[getType(key)], bonus, proficient),
        ]
      )
    )
);

export const selectSkillValue = (name: keyof Skills) =>
  createSelector(selectSkillValues, (skills) => skills[name]);

// TODO
export const selectArmor = createSelector(
  selectAbilityModifier('dexterity'),
  (dexMod) => dexMod + 10
);

// TODO
export const selectInitiative = selectAbilityModifier('dexterity');
