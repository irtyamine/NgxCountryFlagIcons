import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NgxCountryFlagIconsModule,
  NgxCountryFlagIconsService,
} from '@ngx-country-flag-icons/ngx-country-flag-icons';
import { TwemojiIcons } from '@ngx-country-flag-icons/icons-data';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCountryFlagIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([
      TwemojiIcons.countryFlagIconAg,
    ]);
  }
}
