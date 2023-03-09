import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability/ability.component';
import { Stats } from 'models/stats.model';

@Component({
  selector: 'ecs-abilities',
  standalone: true,
  imports: [CommonModule, AbilityComponent],
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent {
  abilities: [string, keyof Stats['abilities']][] = [
    ['Str', 'strength'],
    ['Dex', 'dexterity'],
    ['Con', 'constitution'],
    ['Int', 'intelligence'],
    ['Wis', 'wisdom'],
    ['Cha', 'charisma'],
  ];
}
