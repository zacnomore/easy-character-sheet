import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityComponent } from './ability/ability.component';

@Component({
  selector: 'ecs-abilities',
  standalone: true,
  imports: [CommonModule, AbilityComponent],
  template: `
    <ecs-ability *ngFor="let a of abilities" [name]="a"></ecs-ability>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AbilitiesComponent {
  abilities = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
  ]
}
