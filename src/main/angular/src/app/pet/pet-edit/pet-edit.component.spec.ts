/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PetEditComponent} from './pet-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PetService} from '../../services/pet/pet.service';

describe('PetEditComponent', () => {
	let component: PetEditComponent;
	let fixture: ComponentFixture<PetEditComponent>;

	beforeEach(waitForAsync(() => {

		const mockPetService = {};

		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, RouterTestingModule],
			declarations: [PetEditComponent],
			providers: [{provide: PetService, useValue: mockPetService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PetEditComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
