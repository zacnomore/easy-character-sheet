import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttackComponent } from './attack/attack.component';

@Component({
  selector: 'ecs-attacks',
  standalone: true,
  imports: [CommonModule, AttackComponent],
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.scss'],
})
export class AttacksComponent {}
