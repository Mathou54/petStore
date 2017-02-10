import {Component, OnInit} from '@angular/core';

import {Pet} from "../../model/pet";
import {Observable} from "rxjs";
import {PetService} from "../../services/pet/pet.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pets: Observable<Pet[]>;

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.pets = this.petService.list();
  }

}
