import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectPlayerName, updateBasics } from '../stats.store';
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

  protected nameControl = new FormControl('', { nonNullable: true });

  ngOnInit(): void {
    connectToStore(
      this.nameControl,
      this.store.select(selectPlayerName),
      (characterName) => updateBasics({ basics: { characterName } }),
      this.store,
      this.destroy$
    );
  }
}
