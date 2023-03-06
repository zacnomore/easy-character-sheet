import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
export class AbilityComponent {
  @Input() name = '';

  protected scoreControl = new FormControl(10, { nonNullable: true });

  get modifier() {
    return Math.floor((this.scoreControl.value - 10) / 2);
  }
}
