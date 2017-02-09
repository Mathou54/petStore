import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Pet} from "../../../model/pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
