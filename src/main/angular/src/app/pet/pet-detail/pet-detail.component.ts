import { Component, OnInit } from '@angular/core';

import {Pet} from "../../model/pet";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: Pet;

  constructor() { }

  ngOnInit() {
    this.pet = {
      id: 42,
      name: 'f'
    };
  }

}
