import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountryFlagIconsService } from '@kingdarboja/ngx-country-flag-icons-core';
import {
  countryFlagIconCo,
  NgxCountryFlagIconsTwemojiModule,
} from '@kingdarboja/ngx-country-flag-icons-twemoji';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';

@NgModule({
  declarations: [AmericaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    NgxCountryFlagIconsTwemojiModule
  ]
})
export class AmericaModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([
      countryFlagIconCo,
    ]);
  }
}
