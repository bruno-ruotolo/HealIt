import { ClinicsInfos } from '../models/clinics.model';
import { Injectable, LOCALE_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor() {}

  get() {
    const clinicsData = JSON.parse(localStorage.getItem('clinics') as string);

    let _clinicsInfos = [];
    const cepRegex = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;
    for (let clinic of clinicsData) {
      _clinicsInfos.push({
        ...clinic,
        nome: clinic.nome.charAt(0).toUpperCase() + clinic.nome.slice(1),
        cnpj: clinic.cnpj
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
          .replace(/(\d{4})(\d)/, '$1-$2')
          .replace(/(-\d{2})\d+?$/, '$1'),
        especialidade:
          clinic.especialidade.charAt(0).toUpperCase() +
          clinic.especialidade.slice(1),
        telefone: clinic.telefone
          .replace(/\D/g, '')
          .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{4})\d+?$/, '$1'),
        cep: clinic.cep.replace(cepRegex, '$1.$2-$3'),
        status: clinic.status.charAt(0).toUpperCase() + clinic.status.slice(1),
      });
    }
    return _clinicsInfos;
  }

  add(clinicInfo: Omit<ClinicsInfos, 'id'>) {
    console.log('Entrei');
    const clinicsData: ClinicsInfos[] = JSON.parse(
      localStorage.getItem('clinics') as string
    );
    const generateNewIdNumber: number =
      clinicsData[clinicsData.length - 1].id + 1;

    const newClinicInfos: ClinicsInfos = {
      ...clinicInfo,
      id: generateNewIdNumber,
    };

    clinicsData.push(newClinicInfos);

    const clinicsDataStringfy: string = JSON.stringify(clinicsData);

    localStorage.setItem('clinics', clinicsDataStringfy);
  }

  delete(clinicsInfos: ClinicsInfos[], clinicId: number) {
    const selectedItem = clinicsInfos.findIndex(
      (clinic) => clinic.id === clinicId
    );

    clinicsInfos.splice(selectedItem, 1);

    const newClinicsInfos = JSON.stringify(clinicsInfos);

    localStorage.setItem('clinics', newClinicsInfos);
  }
}
