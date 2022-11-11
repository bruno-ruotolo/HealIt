import { Injectable } from '@angular/core';
import { ScheduleInfos } from '../models/schedule.model';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  get() {
    const scheduleData: ScheduleInfos[] = JSON.parse(
      localStorage.getItem('schedule') as string
    );
    let _scheduleInfos = [];

    for (let schedule of scheduleData) {
      _scheduleInfos.push({
        ...schedule,
        nome: `${schedule.nome?.charAt(0).toUpperCase()}${schedule.nome?.slice(
          1
        )}`,
        telefone:
          schedule.telefone ||
          ''
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1'),
      });
    }
    return _scheduleInfos;
  }
}
