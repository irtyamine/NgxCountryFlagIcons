import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountryFlagIconsService } from '@kingdarboja/ngx-country-flag-icons-core';
import {
  countryFlagIconTz,
  NgxCountryFlagIconsTwemojiModule,
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
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([countryFlagIconTz]);
  }
}
