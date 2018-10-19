import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Pet} from '../../model/pet';
import {HttpErrorsService} from '../http-errors/http-errors.service';
import {HttpClient} from '@angular/common/http';

const URL = '/api/pet';


@Injectable()
export class PetService {

	constructor(
		private http: HttpClient,
		private httpErrorsService: HttpErrorsService) {
	}

	list(): Observable<Pet[]> {
		return this.http.get(`${URL}`)
			.pipe(
				catchError(this.httpErrorsService.handleError())
			) as Observable<Pet[]>;
	}

	get(id: number): Observable<Pet> {
		return this.http.get(`${URL}/${id}`)
			.pipe(
				catchError(this.httpErrorsService.handleError())
			) as Observable<Pet>;
	}

	create(pet: Pet): Observable<Pet> {
		return this.http.post(`${URL}`, pet)
			.pipe(
				catchError(this.httpErrorsService.handleError())
			) as Observable<Pet>;
	}

	update(pet: Pet): Observable<Pet> {
		return this.http.put(`${URL}`, pet)
			.pipe(
				catchError(this.httpErrorsService.handleError())
			) as Observable<Pet>;
	}

	remove(id: number): Observable<Pet> {
		return this.http.delete(`${URL}/${id}`)
			.pipe(
				catchError(this.httpErrorsService.handleError())
			) as Observable<Pet>;
	}
}
