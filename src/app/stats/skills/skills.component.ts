import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { Abilities, Skills } from 'models/stats.model';
import { getName, getType } from 'models/skills.map';

@Component({
  selector: 'ecs-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: { key: keyof Skills; name: string; type: keyof Abilities }[] = (
    [
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
    ] as (keyof Skills)[]
  ).map((key) => ({
    key,
    name: getName(key),
    type: getType(key),
  }));
}
