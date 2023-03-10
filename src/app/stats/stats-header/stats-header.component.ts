import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectAlignment,
  selectBackground,
  selectCharacterName,
  selectClassAndLevel,
  selectExperiencePoints,
  selectPlayerName,
  selectRace,
  updateBasics,
} from '../stats.store';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';
import { connectToStore } from 'src/app/utilities/store-connected-form';

@Component({
  selector: 'ecs-stats-header',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './stats-header.component.html',
  styleUrls: ['./stats-header.component.scss'],
})
export class StatsHeaderComponent extends ObservedLifecycle implements OnInit {
  constructor(private store: Store) {
    super();
  }

  protected characterNameControl = new FormControl('', { nonNullable: true });
  protected classAndLevelControl = new FormControl('', { nonNullable: true });
  protected backgroundControl = new FormControl('', { nonNullable: true });
  protected playerNameControl = new FormControl('', { nonNullable: true });
  protected raceControl = new FormControl('', { nonNullable: true });
  protected alignmentControl = new FormControl('', { nonNullable: true });
  protected experienceControl = new FormControl(0, { nonNullable: true });

  ngOnInit(): void {
    connectToStore(
      this.characterNameControl,
      this.store.select(selectCharacterName),
      (characterName) => updateBasics({ basics: { characterName } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.classAndLevelControl,
      this.store.select(selectClassAndLevel),
      (classAndLevel) => updateBasics({ basics: { classAndLevel } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.backgroundControl,
      this.store.select(selectBackground),
      (background) => updateBasics({ basics: { background } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.playerNameControl,
      this.store.select(selectPlayerName),
      (playerName) => updateBasics({ basics: { playerName } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.raceControl,
      this.store.select(selectRace),
      (race) => updateBasics({ basics: { race } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.alignmentControl,
      this.store.select(selectAlignment),
      (alignment) => updateBasics({ basics: { alignment } }),
      this.store,
      this.destroy$
    );

    connectToStore(
      this.experienceControl,
      this.store.select(selectExperiencePoints),
      (experiencePoints) => updateBasics({ basics: { experiencePoints } }),
      this.store,
      this.destroy$
    );
  }
}
