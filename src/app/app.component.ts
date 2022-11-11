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
      const sortedClinics = JSON.parse(_clinicsInfos).sort(
        (a: { nome: string }, b: { nome: string }) => {
          const first = a.nome.toUpperCase();
          const second = b.nome.toUpperCase();
          return first == second ? 0 : first > second ? 1 : -1;
        }
      );

      localStorage.setItem('clinics', JSON.stringify(sortedClinics));
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
          cep: clinicInfo?.cep,
          numero: clinicInfo?.numero,
          cidade: clinicInfo?.cidade,
          estado: clinicInfo?.estado,
          bairro: clinicInfo?.bairro,
        });
      }

      const _scheduleInfos = JSON.stringify(scheduleListModify);

      const sortedSchedule = JSON.parse(_scheduleInfos).sort(
        (a: { paciente: string }, b: { paciente: string }) => {
          const first = a.paciente.toUpperCase();
          const second = b.paciente.toUpperCase();
          return first == second ? 0 : first > second ? 1 : -1;
        }
      );

      localStorage.setItem('schedule', JSON.stringify(sortedSchedule));
    }
  }
}
