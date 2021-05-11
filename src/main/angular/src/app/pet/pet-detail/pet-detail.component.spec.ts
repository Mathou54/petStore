/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PetDetailComponent} from './pet-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PetService} from '../../services/pet/pet.service';

describe('PetDetailComponent', () => {
	let component: PetDetailComponent;
	let fixture: ComponentFixture<PetDetailComponent>;

	beforeEach(waitForAsync(() => {

		const mockPetService = {
			get: function () {
			}
		};

		spyOn(mockPetService, 'get');

		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [PetDetailComponent],
			providers: [{provide: PetService, useValue: mockPetService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PetDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
