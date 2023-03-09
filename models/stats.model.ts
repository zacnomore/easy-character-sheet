export interface Stats {
  basics: Basics;
  abilities: Abilities;
  skills: Skills;
}

export interface Basics {
  characterName: string;
  classAndLevel: string;
  background: string;
  playerName: string;
  race: string;
  alignment: string;
  experiencePoints: number;
}

export interface Abilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface Skills {
  acrobatics: Skill;
  animalHandling: Skill;
  arcana: Skill;
  athletics: Skill;
  deception: Skill;
  history: Skill;
  insight: Skill;
  intimidation: Skill;
  investigation: Skill;
  medicine: Skill;
  nature: Skill;
  perception: Skill;
  performance: Skill;
  persuasion: Skill;
  religion: Skill;
  sleightOfHand: Skill;
  stealth: Skill;
  survival: Skill;
}

export interface Skill {
  value: number;
  proficient: boolean;
}
