import { Router } from '@angular/router';
import { ClinicService } from '../services/clinic.service';
import { ClinicsInfos } from './../models/clinics.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css'],
})
export class AddClinicComponent implements OnInit {
  public customPatterns = { '0': { pattern: new RegExp('[0-9]') } };
  nome!: string;
  cnpj!: string;
  especialidade!: string;
  telefone!: string;
  cep!: string;
  endereco!: string;
  numero!: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  status: string = 'Ativo';
  preco!: string;
  inicio!: string;
  fim!: string;

  constructor(
    private addClinicService: ClinicService,
    private router: Router
  ) {}

  addClinic() {
    const addClinicData: Omit<ClinicsInfos, 'id'> = {
      nome: this.nome,
      cnpj: this.cnpj,
      especialidade: this.especialidade,
      telefone: this.telefone,
      cep: this.cep,
      endereco: this.endereco,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      estado: this.estado,
      status: this.status,
      preco: this.preco,
      atendimento: {
        inicio: this.inicio,
        fim: this.fim,
      },
    };
    this.addClinicService.add(addClinicData);
  }

  ngOnInit(): void {}
}
