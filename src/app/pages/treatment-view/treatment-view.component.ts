import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { TreatmentModel } from '../../@core/data/treatment-model';
import { AnimalModel } from '../../@core/data/animal-model';
import { ExamenModel } from '../../@core/data/examen-model';

@Component({
  selector: 'treatment-view',
  templateUrl: './treatment-view.component.html',
  styleUrls: ['./treatment-view.component.scss']
})
export class TreatmentViewComponent implements OnInit {

  id: number;
  sub: any;
  public treatments: TreatmentModel[];
  animal: AnimalModel;
  examen: ExamenModel[];

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
    console.log(this.animal);

    this.getExam(this.id);
    console.log(this.animal);
  }

  private getTreatment(id: number) {
    this.service.getTreatment(id).subscribe(
      data => this.treatments = data,
      err => console.log(err),
      () => console.log("done loading treatment...")
    );
  }

  private getExam(id: number) {
    this.service.getExamen(id).subscribe(
      data => this.examen = data,
      err => console.log(err),
      () => console.log("done loading examens...")
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
