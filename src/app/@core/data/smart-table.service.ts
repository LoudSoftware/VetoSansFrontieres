import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [
    {
      'animalno': 1,
      'name': 'Doggo',
      'type': 'A FUCKING It\'s a fucking dog now',
      'bdate': '2000-01-01T05:00:00.001Z',
      'inscriptiondate': '2018-03-07T10:20:04.629Z',
      'state': 'alive',
      'clinic': 1,
      'ownerno': 1,
      'clinicname': 'INEEDHEALING',
    },
  ]

  constructor() { }
  getData() {
    return this.data;
  }
}
