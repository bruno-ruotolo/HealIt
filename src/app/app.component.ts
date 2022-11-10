import { ScheduleInfos } from './models/schedule.model';
import { Component } from '@angular/core';

import clinicsData from '../assets/clinicas.json';
import scheduleData from '../assets/agendamentos.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'desafio-salu';

  constructor() {}

  ngOnInit() {
    const clinicsStoredData = localStorage.getItem('clinics');
    const scheduleStoredData = localStorage.getItem('schedule');

    if (!clinicsStoredData) {
      const _clinicsInfos = JSON.stringify(clinicsData);
      localStorage.setItem('clinics', _clinicsInfos);
    }

    if (!scheduleStoredData) {
      const scheduleList: ScheduleInfos[] = scheduleData;
      const scheduleListModify = [];
      let clinicInfo;
      for (let schedule of scheduleList) {
        clinicInfo = clinicsData.find((clinic) => {
          return schedule.idClinica === clinic.id;
        });
        scheduleListModify.push({
          ...schedule,
          nome: clinicInfo?.nome,
          telefone: clinicInfo?.telefone,
          endereco: clinicInfo?.endereco,
        });
      }
      console.log('Modify', scheduleListModify);
      const _scheduleInfos = JSON.stringify(scheduleListModify);
      localStorage.setItem('schedule', _scheduleInfos);
    }
  }
}
