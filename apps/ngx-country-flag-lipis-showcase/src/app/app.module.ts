import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NgxCountryFlagIconsLipisModule,
  countryFlagIconEs,
  NgxCountryFlagIconsLipisService,
} from '@kingdarboja/ngx-country-flag-icons-lipis';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountryFlagIconsLipisModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private countryFlagIconsService: NgxCountryFlagIconsLipisService
  ) {
    this.countryFlagIconsService.registerIcons([countryFlagIconEs]);
    // this.countryFlagIconsService.registerAllIcons();
  }
}
