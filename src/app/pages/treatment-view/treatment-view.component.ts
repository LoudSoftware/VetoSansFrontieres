import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { TreatmentModel } from '../../@core/data/treatment-model';
import { AnimalModel } from '../../@core/data/animal-model';

@Component({
  selector: 'treatment-view',
  templateUrl: './treatment-view.component.html',
  styleUrls: ['./treatment-view.component.scss']
})
export class TreatmentViewComponent implements OnInit {

  id: number;
  sub: any;
  treatments: TreatmentModel[];
  animal: AnimalModel;


  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getTreatment(this.id);
    console.log(this.treatments);

    this.getAnimal(this.id);
    console.log(this.animal)
  }

  private getTreatment(id: number) {
    this.service.getTreatment(id).subscribe(
      data => this.treatments = data,
      err => console.log(err),
      () => console.log("done loading treatment...")
    );
  }

  private getAnimal(id: number) {
    this.service.getAnimal(id).subscribe(
      data => this.animal = data,
      err => console.log(err),
      () => console.log("done loading animal...")
    );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
