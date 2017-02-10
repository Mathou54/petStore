import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

import {Pet} from "../../model/pet";

const URL: string = '/api/pet';

@Injectable()
export class PetService {

  constructor(private http: Http) { }

  list(): Observable<Pet[]> {
    return this.http.get(`${URL}`)
      .map(response => response.json() as Pet[]);
  }

}
