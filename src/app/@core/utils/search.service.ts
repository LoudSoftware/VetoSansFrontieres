import {Injectable} from '@angular/core';
import {SmartTableService} from "../data/smart-table.service";

@Injectable()
export class SearchService {

  constructor(private smartTableService: SmartTableService) {
  }

  search(query: string) {
    this.smartTableService.findAnimal(query);
  }
}
