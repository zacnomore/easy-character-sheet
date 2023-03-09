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
import { load, save } from '../store/sheet.store';

@Component({
  selector: 'ecs-header',
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
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  save() {
    this.store.dispatch(save());
  }

  load() {
    this.store.dispatch(load());
  }
}
