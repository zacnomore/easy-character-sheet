import { Component } from '@angular/core';

@Component({
  selector: 'ecs-root',
  template: `
    <ecs-header></ecs-header>
    <ecs-abilities></ecs-abilities>
    <ecs-skills></ecs-skills>
  `,
})
export class AppComponent {}
