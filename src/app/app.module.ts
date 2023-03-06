import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbilitiesComponent } from './abilities/abilities.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AbilitiesComponent,
    HeaderComponent,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
