import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { stats, STATS_FEATURE_NAME } from './stats/stats.store';
import { SheetEffects } from './store/sheet.effects';
import { MatDialogModule } from '@angular/material/dialog';
import { skills, SKILLS_FEATURE_NAME } from './stats/skills/skills.store';
import { AuthModule } from '@auth0/auth0-angular';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HttpClientModule,
    MatDialogModule,
    StoreModule.forRoot(),
    StoreModule.forFeature(STATS_FEATURE_NAME, stats),
    StoreModule.forFeature(SKILLS_FEATURE_NAME, skills),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([SheetEffects]),
    AuthModule.forRoot({
      domain: 'come-on-and-slam.auth0.com',
      clientId: 'PgIGMrFPfKAotwPhPM2ODlVpfhpS0Vza',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', subscriptSizing: 'dynamic' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
