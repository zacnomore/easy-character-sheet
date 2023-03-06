import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbilitiesComponent } from './ability-score/ability-score.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AbilitiesComponent,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
