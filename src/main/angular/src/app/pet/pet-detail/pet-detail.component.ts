import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Pet} from '../../model/pet';
import {PetService} from '../../services/pet/pet.service';
import {URL_PARAMS} from '../../app.route.constants';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

	pet: Observable<Pet>;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private petService: PetService) {
	}

	ngOnInit() {
		this.pet = this.petService.get(this.route.snapshot.params[URL_PARAMS.petId]);
	}

	remove(): void {
		this.pet.subscribe((pet: Pet) => {
			this.petService.remove(pet.id)
				.subscribe(() => {
					this.router.navigate(['/']);
				});
		});
	}

}
