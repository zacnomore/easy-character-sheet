import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundHeaderComponent } from './background-header/background-header.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { AlliesOrganizationsComponent } from './allies-organizations/allies-organizations.component';
import { BackstoryComponent } from './backstory/backstory.component';
import { AdditionalFeaturesComponent } from './additional-features/additional-features.component';
import { TreasureComponent } from './treasure/treasure.component';

@Component({
  selector: 'ecs-background',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundHeaderComponent,
    AppearanceComponent,
    AlliesOrganizationsComponent,
    BackstoryComponent,
    AdditionalFeaturesComponent,
    TreasureComponent,
  ],
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
})
export class BackgroundComponent {}
