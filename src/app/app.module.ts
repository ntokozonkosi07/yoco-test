import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeypadComponent } from './keypad/keypad.component';
import { CurrencyFormatPipePipe } from './currency-format-pipe.pipe';
import { ChargeListComponent } from './charge-list/charge-list.component';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponent,
    CurrencyFormatPipePipe,
    ChargeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
