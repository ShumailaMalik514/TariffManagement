import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TariffComponent } from './tariff-list.component';
import { TariffListService } from './tariff-list.service';
import { TariffListComponent } from './tariff-list/tariff-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TariffComponent,
    TariffListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TariffListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
