import {Component, OnInit} from '@angular/core';
import {Pet} from '../../model/pet';
import {Observable} from 'rxjs';
import {PetService} from '../../services/pet/pet.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	pets: Observable<Pet[]>;

	filterTypes: boolean[];

	constructor(private petService: PetService) {
	}

	ngOnInit() {
		this.pets = this.petService.list();

		this.filterTypes = [];
		this.filterTypes['cat'] = true;
		this.filterTypes['dog'] = true;
		this.filterTypes['fish'] = true;
	}

	filterPets(type: string): void {
		this.filterTypes[type] = !this.filterTypes[type];
	}

	filteredPets(pets: Pet[]): Pet[] {
		if (!pets) {
			return pets;
		}
		return pets.filter((pet: Pet) => this.showPet(pet));
	}

	showPet(pet: Pet): boolean {
		return this.isFilterSelected(pet.type);
	}

	isFilterSelected(type: string): boolean {
		return this.filterTypes[type];
	}
}
