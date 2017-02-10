import { Component, OnInit } from '@angular/core';

import {Pet} from "../../model/pet";
import {PetService} from "../../services/pet/pet.service";
import {ActivatedRoute} from "@angular/router";
import {URL_PARAMS} from "../../app.route";
import {Observable} from "rxjs";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: Observable<Pet>;

  constructor(private route: ActivatedRoute,
    private petService: PetService) { }

  ngOnInit() {
    this.pet = this.petService.get(this.route.snapshot.params[URL_PARAMS.petId]);
  }

}
