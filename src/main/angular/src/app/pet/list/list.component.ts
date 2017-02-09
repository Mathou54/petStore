import {Component, OnInit} from '@angular/core';
import {Pet} from "../../model/pet";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pets: Pet[];

  constructor() {
  }

  ngOnInit() {
    this.pets = [{
      id: 1,
      name: 'a'
    }, {
      id: 2,
      name: 'b'
    }, {
      id: 3,
      name: 'c'
    }, {
      id: 4,
      name: 'd'
    }, {
      id: 5,
      name: 'e'
    }];
  }

}
