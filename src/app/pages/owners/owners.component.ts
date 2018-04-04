import { Component, OnInit } from '@angular/core';
import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'owners',
  templateUrl: './owners.component.html',
  styles: [`
      nb-card {
        transform: translate3d(0, 0, 0);
      }`
    ],
})
export class OwnersComponent implements OnInit {

public data;
  constructor(private service: SmartTableService) { } // Injecting Table Service

  ngOnInit() {
    this.getAllOwners(); // Grab all the personnel and save them to the data array

  }

  getAllOwners() {
    this.service.getOwners().subscribe(
      data => this.data = data,
      err => console.error(err),
      () => console.log('done loading Owners...')
    );
  }

}
