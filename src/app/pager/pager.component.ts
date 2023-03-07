import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'ecs-pager',
  standalone: true,
  imports: [CommonModule, MatTabsModule, StatsComponent],
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent {}
