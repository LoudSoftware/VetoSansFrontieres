import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { AnimalModel } from '../../@core/data/animal-model';
import { OwnerModel } from '../../@core/data/owner-model';
import { ClinicModel } from '../../@core/data/clinic-model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit, OnDestroy {

  id: number;
  sub: any;
  public animal: AnimalModel;
  public owners: OwnerModel[];
  public clinics: ClinicModel[];


  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getAnimal(this.id); // Grab the animal and save to the animal array
    console.log(this.animal);

    this.getOwners();
    console.log(this.owners);

    this.getClinics();
    console.log(this.clinics);
  }

  private getOwners() {
    this.service.getOwners().subscribe(
      data => this.owners = data,
      err => console.log(err),
      () => console.log("done loading owners...")
    );
  }


  private getAnimal(id: number) {
    this.service.getAnimal(id).subscribe(
      data => this.animal = data,
      err => console.error(err),
      () => console.log('done loading Animal...')
    );
  }

  private getClinics() {
    this.service.getClinics().subscribe(
      data => this.clinics = data,
      err => console.log(err),
      () => console.log("done loading clinics...")
    );
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  submitted = false;

  onSubmit(animal: AnimalModel) {
    this.service.updateAnimal(this.animal).subscribe(res => {
      if (res['status'] == "success") {
        this.submitted = true;
      }
    });
  }

  deleted = false;
  delete(animal: AnimalModel) {
    if (confirm(`Are you sure you want to delete ${animal.name} ?`)) {
      this.service.removeAnimal(this.animal).subscribe(res => {
      if (res['status'] == "success") {
        this.deleted = true;
      }
    });
    }
  }

}
