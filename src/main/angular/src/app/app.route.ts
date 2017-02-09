import {Routes} from "@angular/router";

import {ListComponent} from "./pet/list/list.component";
import {PetComponent} from "./pet/pet/pet.component";

export const URL_PARAMS = {
  petId: 'petId'
};

export const routes: Routes = [
  {path: '', redirectTo: 'pet', pathMatch: 'full'},
  {path: 'pet', component: ListComponent},
  {path: 'pet/:' + URL_PARAMS.petId, component: PetComponent}
];
