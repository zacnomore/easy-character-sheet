import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, first, map, Subject, takeUntil, tap } from 'rxjs';
import {
  selectAbilities,
  selectBasics,
  updateAbilities,
  updateBasics,
} from '../stats.store';

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
export class StatsHeaderComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  private destroy$ = new Subject<void>();
  protected nameControl = new FormControl('', { nonNullable: true });

  ngOnInit(): void {
    this.store
      .select(selectBasics)
      .pipe(
        first(),
        map((basics) => basics.characterName),
        tap((value) => this.nameControl.setValue(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.nameControl.valueChanges
      .pipe(
        debounceTime(400),
        tap((characterName) =>
          this.store.dispatch(updateBasics({ basics: { characterName } }))
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
