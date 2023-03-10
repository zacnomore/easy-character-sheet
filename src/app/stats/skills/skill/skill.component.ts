import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Skills } from 'models/stats.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { connectToStore } from 'src/app/utilities/store-connected-form';
import { Store } from '@ngrx/store';
import {
  selectSkillProficiency,
  selectSkillValue,
  updateSkill,
} from '../../stats.store';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';

@Component({
  selector: 'ecs-skill',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent extends ObservedLifecycle implements OnInit {
  constructor(private store: Store) {
    super();
  }

  @Input() name = '';
  @Input() key!: keyof Skills;
  @Input() type = '';

  proficientControl = new FormControl<boolean>(false, { nonNullable: true });
  valueControl = new FormControl<number>(10, {
    nonNullable: true,
    validators: [Validators.required],
  });

  ngOnInit(): void {
    connectToStore(
      this.proficientControl,
      this.store.select(selectSkillProficiency(this.key)),
      (proficient) =>
        updateSkill({ skill: { key: this.key, value: { proficient } } }),
      this.store,
      this.destroy$
    );

    console.log(this.key);
    connectToStore(
      this.valueControl,
      this.store.select(selectSkillValue(this.key)),
      (value) => updateSkill({ skill: { key: this.key, value: { value } } }),
      this.store,
      this.destroy$
    );
  }
}
