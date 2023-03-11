import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Abilities, Skills } from 'models/stats.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { connectToStore } from 'src/app/utilities/store-connected-form';
import { Store } from '@ngrx/store';
import {
  selectSkillProficiency,
  selectSkillValue,
  updateSkills,
} from '../../stats.store';
import { ObservedLifecycle } from 'src/app/utilities/lifecycle-observables';
import { EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'ecs-skill',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, ReactiveFormsModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent extends ObservedLifecycle implements OnInit {
  constructor(private store: Store) {
    super();
  }

  @Input() name = '';
  @Input() key!: keyof Skills;
  @Input() type!: keyof Abilities;

  proficientControl = new FormControl<boolean>(false, { nonNullable: true });
  value$: Observable<number> = EMPTY;

  ngOnInit(): void {
    this.value$ = this.store.select(selectSkillValue(this.key));
    connectToStore(
      this.proficientControl,
      this.store.select(selectSkillProficiency(this.key)),
      (proficient) => updateSkills({ skills: { [this.key]: proficient } }),
      this.store,
      this.destroy$
    );
  }
}
