import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  countryFlagIconAo,
  countryFlagIconBf,
  countryFlagIconBi,
  countryFlagIconBj,
  countryFlagIconBw,
  countryFlagIconCd,
  countryFlagIconCf,
  countryFlagIconCg,
  countryFlagIconCi,
  countryFlagIconCm,
  countryFlagIconCv,
  countryFlagIconDj,
  countryFlagIconDz,
  countryFlagIconKm,
  countryFlagIconTd,
  countryFlagIconTz,
  NgxCountryFlagIconsTwemojiModule,
  NgxCountryFlagIconsTwemojiService,
} from '@kingdarboja/ngx-country-flag-icons-twemoji';

import { AfricaComponent } from './africa.component';
import { AfricaRoutingModule } from './africa.routing';

@NgModule({
  declarations: [AfricaComponent],
  imports: [
    CommonModule,
    AfricaRoutingModule,
    NgxCountryFlagIconsTwemojiModule,
  ],
})
export class AfricaModule {
  constructor(
    private countryFlagIconsService: NgxCountryFlagIconsTwemojiService
  ) {
    this.countryFlagIconsService.registerIcons([
      countryFlagIconDz,
      countryFlagIconAo,
      countryFlagIconBj,
      countryFlagIconBw,
      countryFlagIconBf,
      countryFlagIconBi,
      countryFlagIconCv,
      countryFlagIconCm,
      countryFlagIconCf,
      countryFlagIconTd,
      countryFlagIconKm,
      countryFlagIconCg,
      countryFlagIconCd,
      countryFlagIconCi,
      countryFlagIconDj,
      countryFlagIconTz,
    ]);
  }
}
