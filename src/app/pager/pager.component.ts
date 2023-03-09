import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { StatsComponent } from '../stats/stats.component';
import { BackgroundComponent } from '../background/background.component';
import { SpellsComponent } from '../spells/spells.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';
import { save } from '../store/sheet.store';

@Component({
  selector: 'ecs-pager',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    StatsComponent,
    BackgroundComponent,
    SpellsComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent {
  constructor(private store: Store) {}

  save() {
    this.store.dispatch(save());
  }
}
