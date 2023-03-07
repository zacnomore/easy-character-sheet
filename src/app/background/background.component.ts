import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundHeaderComponent } from './background-header/background-header.component';
import { AppearanceComponent } from './appearance/appearance.component';

@Component({
  selector: 'ecs-background',
  standalone: true,
  imports: [CommonModule, BackgroundHeaderComponent, AppearanceComponent],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {}
