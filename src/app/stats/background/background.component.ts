import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'ecs-background',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {}
