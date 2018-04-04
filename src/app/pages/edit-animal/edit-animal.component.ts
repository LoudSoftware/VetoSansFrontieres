import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.scss']
})
export class EditAnimalComponent implements OnInit, OnDestroy {

  id: number;
  sub: any;


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
