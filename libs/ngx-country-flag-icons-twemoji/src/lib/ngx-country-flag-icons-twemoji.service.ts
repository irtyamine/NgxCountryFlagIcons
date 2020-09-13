import { Injectable } from '@angular/core';
import {
  countryFlagIcon,
  CountryFlagIcon,
  NgxCountryFlagIconsService,
} from '@kingdarboja/ngx-country-flag-icons-core';

@Injectable({
  providedIn: 'any',
})
export class NgxCountryFlagIconsTwemojiService {
  constructor(private registryService: NgxCountryFlagIconsService) {}

  public enableWarnings() {
    this.registryService.enableWarnings();
  }

  public registerIcons(icons: CountryFlagIcon[]): void {
    this.registryService.registerIcons(icons);
  }

  public getIcon(iconName: countryFlagIcon) {
    return this.registryService.getIcon(iconName);
  }

  // TODO: I think it ensures correct tree-shaking of icons if calling this
  // method. Should be good to ask on discord channel.
  public async registerAllIcons() {
    const iconList = [];
    const icons = await import('./icon-definitions');
    for (const key in icons) {
      if (Object.prototype.hasOwnProperty.call(icons, key)) {
        iconList.push(icons[key]);
      }
    }
    this.registryService.registerIcons(iconList);
  }
}
