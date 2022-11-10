import { Component } from '@angular/core';

import clinicsData from '../assets/clinicas.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-salu';

  constructor() {}

  ngOnInit() {
    const storedData = localStorage.getItem('clinics');

    if (!storedData) {
      const _clinicsInfos = JSON.stringify(clinicsData);
      localStorage.setItem('clinics', _clinicsInfos);
    }
  }
}
