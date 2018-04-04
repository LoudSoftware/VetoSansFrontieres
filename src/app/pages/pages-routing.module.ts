import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { OwnersComponent } from './owners/owners.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { TreatmentsComponent } from './treatments/treatments.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'animal/:id',
      component: EditAnimalComponent,
    },
    {
      path: 'personnel',
      component: PersonnelComponent,
    },
    {
      path: 'clinics',
      component: ClinicsComponent,
    },
    {
      path: 'owners',
      component: OwnersComponent,
    },
    {
      path: 'treatments',
      component: TreatmentsComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
