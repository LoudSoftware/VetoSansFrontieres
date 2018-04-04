import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'treatments',
  templateUrl: './treatments.component.html',
  styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }`
    ],
})
export class TreatmentsComponent implements OnInit {

public data;

  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllTreatments(); // Grab all the treatments and save them to the data array

  }

  getAllTreatments() {
    this.service.getAllTreatments().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log('done loading Treatments...')
    );
  }

}
