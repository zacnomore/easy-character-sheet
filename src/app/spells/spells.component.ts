import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpellsHeaderComponent } from './spells-header/spells-header.component';
import { SpellLevelComponent } from './spell-level/spell-level.component';

@Component({
  selector: 'ecs-spells',
  standalone: true,
  imports: [CommonModule, SpellsHeaderComponent, SpellLevelComponent],
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent {}
