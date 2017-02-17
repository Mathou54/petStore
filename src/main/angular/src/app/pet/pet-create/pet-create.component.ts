import {Component, OnInit} from "@angular/core";
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-pet-create',
  templateUrl: './pet-create.component.html',
  styleUrls: ['./pet-create.component.css']
})
export class PetCreateComponent implements OnInit {

  pet: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private location: Location,
              private petService: PetService) {
  }

  ngOnInit() {
    this.pet = this.formBuilder.group({
      'name': ['', [Validators.required]],
      'new': [true],
      'type': [],
      'highlighted': [],
      'age': []
    });
  }

  create(): void {
    this.petService.create(this.pet.value)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
