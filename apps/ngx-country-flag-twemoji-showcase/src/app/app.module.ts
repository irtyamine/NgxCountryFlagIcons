import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxCountryFlagIconsService } from '@kingdarboja/ngx-country-flag-icons-core';
import {
  NgxCountryFlagIconsTwemojiModule,
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
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([countryFlagIconEs]);
  }
}
