import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { selectProficiencyBonus } from '../stats.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ecs-proficiency-bonus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.scss'],
})
export class ProficiencyBonusComponent {
  constructor(private store: Store) {}

  bonus$ = this.store.select(selectProficiencyBonus);
}
