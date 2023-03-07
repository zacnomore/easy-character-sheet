import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesComponent } from './abilities/abilities.component';
import { StatsHeaderComponent } from './stats-header/stats-header.component';
import { SavingThrowsComponent } from './saving-throws/saving-throws.component';
import { SkillsComponent } from './skills/skills.component';
import { StatusComponent } from './status/status.component';
import { AttacksComponent } from './attacks/attacks.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BackgroundComponent } from './background/background.component';

@Component({
  selector: 'ecs-stats',
  standalone: true,
  imports: [
    CommonModule,
    StatsHeaderComponent,
    AbilitiesComponent,
    SkillsComponent,
    SavingThrowsComponent,
    StatusComponent,
    AttacksComponent,
    EquipmentComponent,
    BackgroundComponent,
  ],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {}
