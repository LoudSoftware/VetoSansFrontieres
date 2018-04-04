import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { AnimalModel } from '../../@core/data/animal-model';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit, OnDestroy {

  id: number;
  sub: any;
  public animal: AnimalModel;


  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getAnimal(this.id); // Grab the animal and save to the animal array
    console.log(this.animal)
  }



  private getAnimal(id: number) {
    this.service.getAnimal(id).subscribe(
      data => this.animal = data,
      err => console.error(err),
      () => console.log('done loading Animal...')
    );
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit(animal: AnimalModel){
    this.service.updateAnimal(animal).subscribe();
  }

}
