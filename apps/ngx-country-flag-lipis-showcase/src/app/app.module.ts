import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCountryFlagIconsService } from '@kingdarboja/ngx-country-flag-icons-core';
import {
  NgxCountryFlagIconsLipisModule,
  countryFlagIconEs,
} from '@kingdarboja/ngx-country-flag-icons-lipis';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountryFlagIconsLipisModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([countryFlagIconEs]);
  }
}
