import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability/ability.component';

@Component({
  selector: 'ecs-abilities',
  standalone: true,
  imports: [CommonModule, AbilityComponent],
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
})
export class AbilitiesComponent {
  abilities = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];
}
