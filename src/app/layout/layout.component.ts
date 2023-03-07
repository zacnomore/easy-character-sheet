import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesComponent } from '../abilities/abilities.component';
import { HeaderComponent } from '../header/header.component';
import { SavingThrowsComponent } from '../saving-throws/saving-throws.component';
import { SkillsComponent } from '../skills/skills.component';
import { StatusComponent } from '../status/status.component';
import { AttacksComponent } from '../attacks/attacks.component';
import { EquipmentComponent } from '../equipment/equipment.component';
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'ecs-layout',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AbilitiesComponent,
    SkillsComponent,
    SavingThrowsComponent,
    StatusComponent,
    AttacksComponent,
    EquipmentComponent,
    BackgroundComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {}
