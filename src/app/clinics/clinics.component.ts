import { ClinicService } from './../services/clinic.service';
import { ClinicsInfos } from './../models/clinics.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent implements OnInit {
  constructor(private clinicService: ClinicService) {}

  filterTerm!: string;
  _clinicsInfos: ClinicsInfos[] = this.clinicService.get();
  animal!: string;
  name!: string;

  @Input() clinicsInfos: ClinicsInfos[] = this._clinicsInfos;
  @Input() clinicsThead: string[] = [
    'Nome',
    'Cnpj',
    'Especialidade',
    'Telefone',
    'Endereço',
    'Preço',
    'Status',
    'Atendimento',
  ];

  handleClinicData(clinicsData: ClinicsInfos[]) {
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

  deleteClinic(clinicId: number) {
    this.clinicService.delete(this._clinicsInfos, clinicId);
  }

  ngOnInit() {
    console.table(this._clinicsInfos);
  }
}
