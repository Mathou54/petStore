import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Pet} from "../../model/pet";
import {HttpErrorsService} from "../http-errors/http-errors.service";

const URL: string = '/api/pet';


@Injectable()
export class PetService {

  constructor(private http: Http,
              private httpErrorsService: HttpErrorsService) {
  }

  list(): Observable<Pet[]> {
    return this.http.get(`${URL}`)
      .catch(this.httpErrorsService.handleError())
      .map((response: Response) => response.json() as Pet[]);
  }

  get(id: number): Observable<Pet> {
    return this.http.get(`${URL}/${id}`)
      .catch(this.httpErrorsService.handleError())
      .map((response: Response) => response.json() as Pet);
  }
  update(pet: Pet): Observable<Pet> {
    return this.http.put(`${URL}`, pet)
      .catch(this.httpErrorsService.handleError())
      .map((response: Response) => response.json() as Pet);
  }
  remove(id: number): Observable<Pet> {
    return this.http.delete(`${URL}/${id}`)
      .catch(this.httpErrorsService.handleError())
  }
}
