import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Stats } from 'models/stats.model';
import { Store } from '@ngrx/store';
import {
  selectAbility,
  selectAbilityModifier,
  updateAbilities,
} from '../../stats.store';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';
import { connectToStore } from 'src/app/utilities/store-connected-form';
import { EMPTY, Observable } from 'rxjs';

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
export class AbilityComponent
  extends ObservedLifecycle
  implements OnInit, OnDestroy
{
  constructor(private store: Store) {
    super();
  }

  @Input() name = '';
  @Input() abilityKey!: keyof Stats['abilities'];
  protected scoreControl = new FormControl(10, { nonNullable: true });
  protected modifier$: Observable<number> = EMPTY;

  ngOnInit(): void {
    this.modifier$ = this.store.select(selectAbilityModifier(this.abilityKey));
    connectToStore(
      this.scoreControl,
      this.store.select(selectAbility(this.abilityKey)),
      (value) => updateAbilities({ abilities: { [this.abilityKey]: value } }),
      this.store,
      this.destroy$
    );
  }
}
