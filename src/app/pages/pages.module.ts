import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { OwnersComponent } from './owners/owners.component';
import { ClinicsComponent } from './clinics/clinics.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { TreatmentViewComponent } from './treatment-view/treatment-view.component';
import { CreateAnimalComponent } from './create-animal/create-animal.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    EditAnimalComponent,
    PersonnelComponent,
    OwnersComponent,
    ClinicsComponent,
    TreatmentsComponent,
    TreatmentViewComponent,
    CreateAnimalComponent,
  ],
})
export class PagesModule {
}
