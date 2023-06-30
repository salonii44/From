import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityTsService {

  username:string='John Doe'
    // username = new subject<any>();

  constructor() { }

}
