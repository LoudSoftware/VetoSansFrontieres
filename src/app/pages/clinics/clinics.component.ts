import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';


@Component({
  selector: 'clinics',
  templateUrl: './clinics.component.html',
  styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }`,
    ],
})


export class ClinicsComponent implements OnInit {

  public data;

  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllClinics(); // Grab all the personnel and save them to the data array

  }

  getAllClinics() {
    this.service.getClinics().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log('done loading Personnel...'),
    );
  }

}
