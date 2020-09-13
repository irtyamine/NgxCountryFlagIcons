import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NgxCountryFlagIconsTwemojiModule,
  NgxCountryFlagIconsTwemojiService,
  countryFlagIconEs,
} from '@kingdarboja/ngx-country-flag-icons-twemoji';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxCountryFlagIconsTwemojiModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private countryFlagIconsService: NgxCountryFlagIconsTwemojiService
  ) {
    this.countryFlagIconsService.registerIcons([countryFlagIconEs]);
    // this.countryFlagIconsService.registerAllIcons();
  }
}
