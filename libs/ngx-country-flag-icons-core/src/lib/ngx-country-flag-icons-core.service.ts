import { Injectable } from '@angular/core';
import { CountryFlagIcon, countryFlagIcon } from './ngx-country-flag-icons-core';

@Injectable({
  providedIn: 'any',
})
export class NgxCountryFlagIconsService {
  private warnings = false;
  private registry = new Map<string, string>();

  public enableWarnings() {
    this.warnings = true;
  }

  public registerIcons(icons: CountryFlagIcon[]): void {
    icons.forEach((icon: CountryFlagIcon) =>
      this.registry.set(icon.name, icon.data)
    );
  }

  public getIcon(iconName: countryFlagIcon): string | undefined {
    if (!this.registry.has(iconName) && this.warnings) {
      console.warn(
        `We could not find the Icon with the name ${iconName}, did you add it to the Icon registry?`
      );
    }
    return this.registry.get(iconName);
  }
}
