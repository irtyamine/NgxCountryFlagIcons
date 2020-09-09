import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountryFlagIconsModule, NgxCountryFlagIconsService } from '@ngx-country-flag-icons/ngx-country-flag-icons';
import { LipisIcons } from '@ngx-country-flag-icons/icons-data';

import { AmericaComponent } from './america.component';
import { AmericaRoutingModule } from './america.routing';

@NgModule({
  declarations: [AmericaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule,
    NgxCountryFlagIconsModule
  ]
})
export class AmericaModule {
  constructor(private countryFlagIconsService: NgxCountryFlagIconsService) {
    this.countryFlagIconsService.registerIcons([
      LipisIcons.countryFlagIconCo,
    ]);
  }
}
