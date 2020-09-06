import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  NgxCountryFlagIconsModule,
  NgxCountryFlagIconsService,
} from '@ngx-country-flag-icons/ngx-country-flag-icons';
import { countryFlagIconEs } from '@ngx-country-flag-icons/icons-data';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxCountryFlagIconsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([
      countryFlagIconEs,
    ]);
  }
}
