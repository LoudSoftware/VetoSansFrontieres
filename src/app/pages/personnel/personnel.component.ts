import { Component, OnInit } from '@angular/core';


import { SmartTableService } from '../../@core/data/smart-table.service';
import { ClinicModel } from '../../@core/data/clinic-model';

@Component({
  selector: 'personnel',
  templateUrl: './personnel.component.html',
  styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }`
    ],
})


export class PersonnelComponent implements OnInit {

public data;
public clinics: ClinicModel[];

  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllPersonnel(); // Grab all the personnel and save them to the data array
    this.getAllClinics();
  }

  getAllPersonnel() {
    this.service.getPersonnel().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => {
        console.log('done loading Personnel...');
        this.data.forEach(personnel => {
          personnel['bdate'] = new Date(personnel['bdate']).toDateString();
        });
      }
    );
  }

  private getAllClinics() {
    this.service.getClinics().subscribe(
      data => this.clinics = data,
      err => console.log(err),
      () => console.log("done loading clinics...")
    );
  }

}
