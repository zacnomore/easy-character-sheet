import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ecs-saving-throw',
  standalone: true,
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <mat-checkbox></mat-checkbox>
    <mat-form-field>
      <mat-label>{{ name }}</mat-label>
      <input type="text" matInput />
    </mat-form-field>
  `,
  styles: [':host { display: flex; }'],
})
export class SavingThrowComponent {
  @Input() name = '';
}

@Component({
  selector: 'ecs-saving-throws',
  standalone: true,
  imports: [CommonModule, SavingThrowComponent],
  templateUrl: './saving-throws.component.html',
  styleUrls: ['./saving-throws.component.scss'],
})
export class SavingThrowsComponent {
  throws = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma',
  ];
}
