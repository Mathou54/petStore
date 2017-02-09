import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Pet} from "../../model/pet";
import {URL_PARAMS} from "../../app.route";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit, OnChanges {

  @Input() pet: Pet;

  constructor(private route: ActivatedRoute) { }

  ngOnChanges(): void {
    if(!this.pet && this.route.snapshot.params[URL_PARAMS.petId]) {
      this.pet = {
        id: 42,
        name: 'f'
      };
    }
  }

  ngOnInit(): void {
    this.ngOnChanges();
  }

  deletePet(pet: Pet): void {
  }

}
