import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";

import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

import {Pet} from "../../model/pet";

const URL: string = '/api/pet';

@Injectable()
export class PetService {

  constructor(private http: Http) { }

  list(): Observable<Pet[]> {
    return this.http.get(`${URL}`)
      .map((response: Response) => response.json() as Pet[]);
  }

  get(id: number): Observable<Pet> {
    return this.http.get(`${URL}/${id}`)
      .map((response: Response) => response.json() as Pet);
  }
}
