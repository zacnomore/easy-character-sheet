import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import {
  selectArmor,
  selectCurrentHitPoints,
  selectInitiative,
  selectRemainingHitDice,
  selectTempHitPoints,
  updateCurrentHitPoints,
  updateRemainingHitDice,
  updateTempHitPoints,
} from '../stats.store';
import { of } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';
import { connectToStore } from 'src/app/utilities/store-connected-form';

@Component({
  selector: 'ecs-status',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent extends ObservedLifecycle implements OnInit {
  constructor(private store: Store) {
    super();
  }

  armor$ = this.store.select(selectArmor);
  initiative$ = this.store.select(selectInitiative);
  // TODO
  speed$ = of(10);

  // TODO
  totalHitDice$ = of(1);
  currentHitPointsControl = new FormControl(0, { nonNullable: true });
  tempHitPointsControl = new FormControl(0, { nonNullable: true });
  remainingHitDiceControl = new FormControl(0, { nonNullable: true });

  ngOnInit(): void {
    connectToStore(
      this.currentHitPointsControl,
      this.store.select(selectCurrentHitPoints),
      (currentHitPoints) => updateCurrentHitPoints({ currentHitPoints }),
      this.store,
      this.destroy$
    );
    connectToStore(
      this.tempHitPointsControl,
      this.store.select(selectTempHitPoints),
      (temporaryHitPoints) => updateTempHitPoints({ temporaryHitPoints }),
      this.store,
      this.destroy$
    );
    connectToStore(
      this.remainingHitDiceControl,
      this.store.select(selectRemainingHitDice),
      (remainingHitDice) => updateRemainingHitDice({ remainingHitDice }),
      this.store,
      this.destroy$
    );
  }
}
