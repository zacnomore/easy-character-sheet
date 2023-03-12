export interface Stats {
  basics: Basics;

  proficiencyBonus: number;

  currentHitPoints: number;
  temporaryHitPoints: number;

  remainingHitDice: number;

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
  acrobatics: boolean;
  animalHandling: boolean;
  arcana: boolean;
  athletics: boolean;
  deception: boolean;
  history: boolean;
  insight: boolean;
  intimidation: boolean;
  investigation: boolean;
  medicine: boolean;
  nature: boolean;
  perception: boolean;
  performance: boolean;
  persuasion: boolean;
  religion: boolean;
  sleightOfHand: boolean;
  stealth: boolean;
  survival: boolean;
}
