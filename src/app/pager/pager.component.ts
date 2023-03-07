import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { StatsComponent } from '../stats/stats.component';
import { BackgroundComponent } from '../background/background.component';
import { SpellsComponent } from '../spells/spells.component';

@Component({
  selector: 'ecs-pager',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    StatsComponent,
    BackgroundComponent,
    SpellsComponent,
  ],
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent {}
