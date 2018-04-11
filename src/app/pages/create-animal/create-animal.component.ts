import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { AnimalModel } from '../../@core/data/animal-model';
import { OwnerModel } from '../../@core/data/owner-model';
import { ClinicModel } from '../../@core/data/clinic-model';

@Component({
  selector: 'create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.scss']
})
export class CreateAnimalComponent implements OnInit {

  id: number;
  sub: any;
  public animal: AnimalModel;
  public owners: OwnerModel[];
  public clinics: ClinicModel[];
  public animaltypes: any[];

  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getOwners();
    console.log(this.owners);

    this.getClinics();
    console.log(this.clinics);

    this.getAnimalTypes();
    console.log(this.animaltypes);

    this.animal = new AnimalModel();
  }

  private getOwners() {
    this.service.getOwners().subscribe(
      data => this.owners = data,
      err => console.log(err),
      () => console.log("done loading owners...")
    );
  }

  private getClinics() {
    this.service.getClinics().subscribe(
      data => this.clinics = data,
      err => console.log(err),
      () => console.log("done loading clinics...")
    );
  }

  private getAnimalTypes() {
    this.service.getAnimalTypes().subscribe(
      data => this.animaltypes = data,
      err => console.log(err),
      () => console.log("done loading animal types...")
    );
  }


  submitted = false;

  onSubmit(animal: AnimalModel) {
    this.service.createAnimal(this.animal).subscribe(res => {
      if (res['status'] == "success") {
        this.submitted = true;
      }
    });
  }

}
