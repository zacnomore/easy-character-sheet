import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'ecs-skill',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input() name = '';
  @Input() type = '';
}
