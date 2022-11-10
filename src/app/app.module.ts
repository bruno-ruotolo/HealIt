import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicsComponent } from './clinics/clinics.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AddClinicComponent } from './add-clinic/add-clinic.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [AppComponent, ClinicsComponent, AddClinicComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
