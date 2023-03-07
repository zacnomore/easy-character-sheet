import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundHeaderComponent } from './background-header/background-header.component';

@Component({
  selector: 'ecs-background',
  standalone: true,
  imports: [CommonModule, BackgroundHeaderComponent],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {}
