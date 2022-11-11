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
  patientList: string[] = [];
  clinicsList: string[] = [];

  constructor(private scheduleService: ScheduleService) {}
  _scheduleInfos: ScheduleInfos[] = this.scheduleService.get();

  @Input() scheduleInfos: ScheduleInfos[] = this._scheduleInfos;

  getPatientList() {
    this._scheduleInfos.forEach((schedule) => {
      this.patientList?.push(schedule.paciente);
    });
  }

  getClinicsList() {
    this._scheduleInfos.forEach((schedule) => {
      this.clinicsList?.push(schedule.nome as string);
    });
  }

  ngOnInit(): void {
    this.getPatientList();
    this.getClinicsList();
  }
}
