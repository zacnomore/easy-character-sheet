import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Stats } from 'models/stats.model';
import { debounceTime, first, map, Subject, takeUntil, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAbilities, updateAbilities } from '../../stats.store';

@Component({
  selector: 'ecs-ability',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
})
export class AbilityComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}

  @Input() name = '';
  @Input() abilityKey!: keyof Stats['abilities'];

  private destroy$ = new Subject<void>();
  protected scoreControl = new FormControl(10, { nonNullable: true });

  modifier(score: number) {
    return Math.floor((score - 10) / 2);
  }

  ngOnInit(): void {
    this.store
      .select(selectAbilities)
      .pipe(
        first(),
        map((abilities) => abilities[this.abilityKey]),
        tap((value) => this.scoreControl.setValue(value)),
        takeUntil(this.destroy$)
      )
      .subscribe();

    this.scoreControl.valueChanges
      .pipe(
        debounceTime(400),
        tap((value) =>
          this.store.dispatch(
            updateAbilities({ abilities: { [this.abilityKey]: value } })
          )
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
