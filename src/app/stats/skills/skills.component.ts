import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill/skill.component';
import { Skills } from 'models/stats.model';

@Component({
  selector: 'ecs-skills',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: { key: keyof Skills; name: string; type: string }[] = [
    { key: 'acrobatics', name: 'Acrobatics', type: 'Dex' },
    { key: 'animalHandling', name: 'Animal Handling', type: 'Wis' },
    { key: 'arcana', name: 'Arcana', type: 'Int' },
    { key: 'athletics', name: 'Athletics', type: 'Str' },
    { key: 'deception', name: 'Deception', type: 'Cha' },
    { key: 'history', name: 'History', type: 'Int' },
    { key: 'insight', name: 'Insight', type: 'Wis' },
    { key: 'intimidation', name: 'Intimidation', type: 'Cha' },
    { key: 'investigation', name: 'Investigation', type: 'Int' },
    { key: 'medicine', name: 'Medicine', type: 'Wis' },
    { key: 'nature', name: 'Nature', type: 'Int' },
    { key: 'perception', name: 'Perception', type: 'Wis' },
    { key: 'performance', name: 'Performance', type: 'Cha' },
    { key: 'persuasion', name: 'Persuasion', type: 'Cha' },
    { key: 'religion', name: 'Religion', type: 'Int' },
    { key: 'sleightOfHand', name: 'Sleight of Hand', type: 'Dex' },
    { key: 'stealth', name: 'Stealth', type: 'Dex' },
    { key: 'survival', name: 'Survival', type: 'Wis' },
  ];
}
