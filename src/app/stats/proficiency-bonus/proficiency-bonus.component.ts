import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { connectToStore } from 'src/app/utilities/store-connected-form';
import { selectProficiencyBonus, updateProficiencyBonus } from '../stats.store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ecs-proficiency-bonus',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './proficiency-bonus.component.html',
  styleUrls: ['./proficiency-bonus.component.scss'],
})
export class ProficiencyBonusComponent
  extends ObservedLifecycle
  implements OnInit
{
  constructor(private store: Store) {
    super();
  }

  bonusControl = new FormControl(0, {
    nonNullable: true,
    validators: Validators.required,
  });

  ngOnInit() {
    connectToStore(
      this.bonusControl,
      this.store.select(selectProficiencyBonus),
      (bonus) => updateProficiencyBonus({ bonus }),
      this.store,
      this.destroy$
    );
  }
}
