import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountryFlagIconsService } from '@kingdarboja/ngx-country-flag-icons-core';
import {
  countryFlagIconTz,
  NgxCountryFlagIconsLipisModule,
} from '@kingdarboja/ngx-country-flag-icons-lipis';

import { AfricaComponent } from './africa.component';
import { AfricaRoutingModule } from './africa.routing';

@NgModule({
  declarations: [AfricaComponent],
  imports: [CommonModule, AfricaRoutingModule, NgxCountryFlagIconsLipisModule],
})
export class AfricaModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([countryFlagIconTz]);
  }
}
