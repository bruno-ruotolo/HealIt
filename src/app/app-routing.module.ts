import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'clinics',
    pathMatch: 'full',
  },
  { path: 'clinics', component: ClinicsComponent },
  { path: 'add-clinic', component: AddClinicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
