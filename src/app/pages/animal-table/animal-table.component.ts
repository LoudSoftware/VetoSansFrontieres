import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';

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




  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllAnimals(); // Grab all the animals and save them to the data array

  }

  getAllAnimals() {
    this.service.getAnimals().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log('done loading Animals...')
    );
  }

}
