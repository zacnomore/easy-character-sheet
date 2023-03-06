import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbilitiesComponent } from './ability-score/ability-score.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AbilitiesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
