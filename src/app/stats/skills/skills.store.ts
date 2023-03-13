import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { getType } from 'models/skills.map';
import { Skills } from 'models/stats.model';
import { selectAbilityModifiers, selectProficiencyBonus } from '../stats.store';

export const updateSkills = createAction(
  '[Stats] Update Skills',
  props<{ skills: Partial<Skills> }>()
);

interface SkillsState {
  skills: Skills;
}

const initialState: SkillsState = {
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

export const skills = createReducer<SkillsState>(
  initialState,
  on(
    updateSkills,
    (state, { skills }): SkillsState => ({
      ...state,
      skills: {
        ...state.skills,
        ...skills,
      },
    })
  )
);

export const SKILLS_FEATURE_NAME = 'skills';

const selectSkillsFeature =
  createFeatureSelector<SkillsState>(SKILLS_FEATURE_NAME);

export const selectSkillProficiencies = createSelector(
  selectSkillsFeature,
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
