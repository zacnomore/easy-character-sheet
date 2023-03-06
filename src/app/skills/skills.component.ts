import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';

@Component({
  selector: 'ecs-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'Acrobatics', type: 'Dex' },
    { name: 'Animal Handling', type: 'Wis' },
    { name: 'Arcana', type: 'Int' },
    { name: 'Athletics', type: 'Str' },
    { name: 'Deception', type: 'Cha' },
    { name: 'History', type: 'Int' },
    { name: 'Insight', type: 'Wis' },
    { name: 'Intimidation', type: 'Cha' },
    { name: 'Investigation', type: 'Int' },
    { name: 'Medicine', type: 'Wis' },
    { name: 'Nature', type: 'Int' },
    { name: 'Perception', type: 'Wis' },
    { name: 'Performance', type: 'Cha' },
    { name: 'Persuasion', type: 'Cha' },
    { name: 'Religion', type: 'Int' },
    { name: 'Sleight of Hand', type: 'Dex' },
    { name: 'Stealth', type: 'Dex' },
    { name: 'Survival', type: 'Wis' },
  ];
}
