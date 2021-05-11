/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PetCreateComponent} from './pet-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {PetService} from '../../services/pet/pet.service';

describe('PetCreateComponent', () => {
	let component: PetCreateComponent;
	let fixture: ComponentFixture<PetCreateComponent>;

	beforeEach(waitForAsync(() => {

		const mockPetService = {};

		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, RouterTestingModule],
			declarations: [PetCreateComponent],
			providers: [{provide: PetService, useValue: mockPetService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PetCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
