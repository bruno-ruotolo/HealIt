import { ScheduleService } from './../services/schedule.service';
import { ScheduleInfos } from './../models/schedule.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private scheduleService: ScheduleService) {}
  _scheduleInfos: ScheduleInfos[] = this.scheduleService.get();

  @Input() scheduleInfos: ScheduleInfos[] = this._scheduleInfos;

  ngOnInit(): void {
    console.table(this._scheduleInfos);
  }
}
