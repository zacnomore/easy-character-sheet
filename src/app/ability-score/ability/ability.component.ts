import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecs-ability',
  standalone: true,
  imports: [CommonModule],
  template: `
    {{ name }}
    <label>
      Score
      <input/>
    </label>
    <label>
      Modifier
      <input/>
    </label>
  `,
  styles: [`
    :host, label {
      display: flex;
      flex-direction: column;
      width: 80px;
    }
  `]
})
export class AbilityComponent {
  @Input() name = '';
}
