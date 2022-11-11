import { ScheduleService } from './../services/schedule.service';
import { ScheduleInfos } from './../models/schedule.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  patient!: string;
  clinic!: string;
  filterTerm!: string;

  constructor(private scheduleService: ScheduleService) {}
  _scheduleInfos: ScheduleInfos[] = this.scheduleService.get();

  @Input() scheduleInfos: ScheduleInfos[] = this._scheduleInfos;

  getPatientList() {
    const patientsArr: string[] = [];
    this._scheduleInfos?.forEach((schedule) => {
      patientsArr.push(schedule.paciente);
    });

    const uniquePatientsList = Array.from([...new Set(patientsArr)]);
    return uniquePatientsList;
  }

  getClinicsList() {
    const clinicsArr: string[] = [];
    this._scheduleInfos.forEach((schedule) => {
      clinicsArr.push(schedule.nome as string);
    });

    const uniqueClinicsList = Array.from([...new Set(clinicsArr)]);
    return uniqueClinicsList;
  }

  patientList: string[] = this.getPatientList();
  clinicsList: string[] = this.getClinicsList();

  ngOnInit(): void {}
}
