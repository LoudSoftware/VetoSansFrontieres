import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AnimalTableComponent } from '../animal-table/animal-table.component'


@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    DashboardComponent,
    AnimalTableComponent,
  ],
})
export class DashboardModule { }
