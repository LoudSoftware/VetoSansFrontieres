import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'ngx-animal-table',
  templateUrl: './animal-table.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`],
})

export class AnimalTableComponent implements OnInit {

  source: LocalDataSource;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      /* animalno: {
        title: 'animalNo',
        editable: false,
        addable: false,
      }, */
      name: {
        title: 'Name',
      },
      type: {
        title: 'Type',
      },
      bdate: {
        title: 'Birthday',
      },
      inscriptiondate: {
        title: 'Inscription Date',
      },
      state: {
        title: 'State',
      },
      clinic: {
        title: 'Clinic',
      },
      ownerno: {
        title: 'OwnerNumber',
      },
      clinicname: {
        title: 'Clinic Name',
        editable: false,
      },
    },
  };



  constructor(private service: SmartTableService) {
    this.source = new LocalDataSource();
    // const data = this.service.getData();
    const data = this.service.getData().then((data) => {
      this.source.load(data)
      console.log(data);
    });
    // this.source.load(data);
  }


  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() { }

}
