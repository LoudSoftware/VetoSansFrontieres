import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { AnimalModel } from '../../@core/data/animal-model';
import { OwnerModel } from '../../@core/data/owner-model';
import { ClinicModel } from '../../@core/data/clinic-model';

@Component({
  selector: 'create-animal',
  templateUrl: './create-animal.component.html',
  styleUrls: ['./create-animal.component.scss'],
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
      () => console.log('done loading owners...'),
    );
  }

  private getClinics() {
    this.service.getClinics().subscribe(
      data => this.clinics = data,
      err => console.log(err),
      () => console.log('done loading clinics...'),
    );
  }

  private getAnimalTypes() {
    this.service.getAnimalTypes().subscribe(
      data => this.animaltypes = data,
      err => console.log(err),
      () => console.log('done loading animal types...'),
    );
  }

  submitted = false;

  onSubmit() {
    console.log(this.animal);
    const bdate = new Date();

    bdate.setFullYear(parseInt(this.animal.bdate.split('-')[0]));
    bdate.setMonth(parseInt(this.animal.bdate.split('-')[1]));
    bdate.setDate(parseInt(this.animal.bdate.split('-')[2]));

    this.animal.bdate = bdate.toISOString();

    const inscriptiondate = new Date();

    bdate.setFullYear(parseInt(this.animal.inscriptiondate.split('-')[0]));
    bdate.setMonth(parseInt(this.animal.inscriptiondate.split('-')[1]));
    bdate.setDate(parseInt(this.animal.inscriptiondate.split('-')[2]));

    this.animal.inscriptiondate = inscriptiondate.toISOString();

    this.animal.isalive = true;

    this.animal.bdate = new Date(this.animal.bdate).toISOString();
    this.animal.inscriptiondate = new Date(this.animal.inscriptiondate).toISOString();
    console.log(this.animal);
    this.service.createAnimal(this.animal).subscribe(res => {
      if (res['status'] == 'success') {
        this.submitted = true;
      }
    });
  }

}
