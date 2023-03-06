import { Component } from '@angular/core';

@Component({
  selector: 'ecs-root',
  template: `
    <ecs-header></ecs-header>
    <ecs-abilities></ecs-abilities>
    <ecs-skills></ecs-skills>
    <ecs-saving-throws></ecs-saving-throws>
  `,
})
export class AppComponent {}
