import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { ClinicModel } from '../../@core/data/clinic-model';

@Component(
  {
    selector: 'ngx-animal-table',
    templateUrl: './animal-table.component.html',
    styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }`
    ],
  }
)



export class AnimalTableComponent implements OnInit {
  public data;

  public clinics: ClinicModel[];

  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllAnimals(); // Grab all the animals and save them to the data array
    this.getAllClinics();

  }

  getAllAnimals() {
    this.service.getAnimals().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => {
        console.log('done loading Animals...');
        this.data.forEach(animal => {
          animal['inscriptiondate'] = new Date(animal['inscriptiondate']).toDateString();
          animal['bdate'] = new Date(animal['bdate']).toDateString();
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
