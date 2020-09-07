import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountryFlagIconsModule, NgxCountryFlagIconsService } from '@ngx-country-flag-icons/ngx-country-flag-icons';
import { TwemojiIcons } from '@ngx-country-flag-icons/icons-data';

import { AfricaComponent } from './africa.component';
import { AfricaRoutingModule } from './africa.routing';

@NgModule({
  declarations: [AfricaComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    NgxCountryFlagIconsModule
  ]
})
export class AfricaModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([
      TwemojiIcons.countryFlagIconTz,
    ]);
  }
}
