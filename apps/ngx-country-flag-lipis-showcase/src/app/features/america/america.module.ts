import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  countryFlagIconCo,
  NgxCountryFlagIconsLipisModule,
  NgxCountryFlagIconsLipisService,
} from '@kingdarboja/ngx-country-flag-icons-lipis';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';

@NgModule({
  declarations: [AmericaComponent],
  imports: [CommonModule, AmericaRoutingModule, NgxCountryFlagIconsLipisModule],
})
export class AmericaModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsLipisService) {
    this.countryFlagIconsService.registerIcons([countryFlagIconCo]);
  }
}
