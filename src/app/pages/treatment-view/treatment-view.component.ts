import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SmartTableService} from '../../@core/data/smart-table.service';
import { TreatmentModel } from '../../@core/data/treatment-model';

@Component({
  selector: 'treatment-view',
  templateUrl: './treatment-view.component.html',
  styleUrls: ['./treatment-view.component.scss']
})
export class TreatmentViewComponent implements OnInit {

  id:number;
  sub: any;
  treatment: TreatmentModel; // make public if it doesn't work



  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getTreatment(this.id);
    console.log(this.treatment)
  }

  private getTreatment(id: number) {
    this.service.getTreatment(id).subscribe(
      data => this.treatment = data,
      err => console.log(err),
      () => console.log("done loading treatment...")
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
