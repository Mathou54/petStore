/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {PetCreateComponent} from "./pet-create.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {PetService} from "../../services/pet/pet.service";

describe('PetCreateComponent', () => {
  let component: PetCreateComponent;
  let fixture: ComponentFixture<PetCreateComponent>;

  beforeEach(async(() => {

    let mockPetService = {};

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
