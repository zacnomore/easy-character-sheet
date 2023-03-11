import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Store } from '@ngrx/store';
import { selectArmor, selectInitiative } from '../stats.store';
import { of } from 'rxjs';

@Component({
  selector: 'ecs-status',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  constructor(private store: Store) {}

  armor$ = this.store.select(selectArmor);
  initiative$ = this.store.select(selectInitiative);
  // TODO
  speed$ = of(10);
}
