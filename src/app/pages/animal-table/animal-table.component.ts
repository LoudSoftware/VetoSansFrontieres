import { Component, OnInit } from '@angular/core';

import { SmartTableService } from '../../@core/data/smart-table.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'animal-table',
  templateUrl: './animal-table.component.html',
  styles: [`
  nb-card {
    transform: translate3d(0, 0, 0);
  }
`]
})

export class AnimalTableComponent implements OnInit {

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
      animalno: {
        title: 'animalNo',
        editable: false,
        addable: false,
      },
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
        title: 'Clinic'
      },
      ownerno: {
        title: 'OwnerNumber',
      },
      clinicname: {
        title: 'Clinic Name',
        editable: false,
      }
    },
  };


  source = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit(){}

}
