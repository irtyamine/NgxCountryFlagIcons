import { Component, OnInit } from '@angular/core';
import { AfricaCountries } from './africa-country-list';

@Component({
  selector: 'app-africa',
  templateUrl: 'africa.component.html'
})

export class AfricaComponent implements OnInit {
  countries = AfricaCountries;

  constructor() { }

  ngOnInit() { }
}
