import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { NgxCountryFlagIconsService } from './ngx-country-flag-icons.service';
import { DOCUMENT } from '@angular/common';
import { countryFlagIcon } from '@ngx-country-flag-icons/icons-data';

@Component({
  selector: 'ngx-country-flag-icons',
  template: ` <ng-content></ng-content> `,
  styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxCountryFlagIconsComponent {
  private svgIcon: SVGElement;

  @Input()
  set name(iconName: countryFlagIcon) {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }
    const svgData = this.ngxCountryFlagIconRegistry.getIcon(iconName);
    this.svgIcon = this.svgElementFromString(svgData);
    this.element.nativeElement.appendChild(this.svgIcon);
  }

  constructor(
    private element: ElementRef,
    private ngxCountryFlagIconRegistry: NgxCountryFlagIconsService,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
