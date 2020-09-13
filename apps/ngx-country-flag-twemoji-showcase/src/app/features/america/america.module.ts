import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  countryFlagIconCo,
  NgxCountryFlagIconsTwemojiModule,
  NgxCountryFlagIconsTwemojiService,
} from '@kingdarboja/ngx-country-flag-icons-twemoji';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';

@NgModule({
  declarations: [AmericaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    NgxCountryFlagIconsTwemojiModule,
  ],
})
export class AmericaModule {
  constructor(
    private countryFlagIconsService: NgxCountryFlagIconsTwemojiService
  ) {
    this.countryFlagIconsService.registerIcons([countryFlagIconCo]);
  }
}
