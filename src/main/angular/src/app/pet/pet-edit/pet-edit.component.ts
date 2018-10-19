import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {Pet} from '../../model/pet';
import {PetService} from '../../services/pet/pet.service';
import {URL_PARAMS} from '../../app.route.constants';

@Component({
	selector: 'app-pet-edit',
	templateUrl: './pet-edit.component.html',
	styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

	pet: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private location: Location,
		private route: ActivatedRoute,
		private petService: PetService) {
	}

	ngOnInit() {
		this.pet = this.formBuilder.group({
			'name': ['', [Validators.required]],
			'new': [],
			'type': [],
			'highlighted': [],
			'age': []
		});

		if (this.route.snapshot.params[URL_PARAMS.petId]) {
			this.petService.get(this.route.snapshot.params[URL_PARAMS.petId])
				.subscribe((pet: Pet) => {
					this.pet = this.formBuilder.group({
						'id': [pet.id, [Validators.required]],
						'name': [pet.name, [Validators.required]],
						'new': [pet.new],
						'type': [pet.type],
						'highlighted': [pet.highlighted],
						'age': [pet.age]
					});
				})
		}
	}

	edit(): void {
		this.petService.update(this.pet.value)
			.subscribe(() => {
				this.location.back();
			});
	}

	remove(): void {
		this.petService.remove(this.pet.value.id)
			.subscribe(() => {
				this.router.navigate(['/']);
			});
	}

}
