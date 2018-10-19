import {Routes} from '@angular/router';
import {ListComponent} from './pet/list/list.component';
import {PetDetailComponent} from './pet/pet-detail/pet-detail.component';
import {PetCreateComponent} from './pet/pet-create/pet-create.component';
import {PetEditComponent} from './pet/pet-edit/pet-edit.component';
import {URL_PARAMS} from './app.route.constants';

export const routes: Routes = [
	{path: '', redirectTo: 'pet', pathMatch: 'full'},
	{path: 'pet', component: ListComponent},
	{path: 'pet/create', component: PetCreateComponent},
	{path: 'pet/:' + URL_PARAMS.petId, component: PetDetailComponent},
	{path: 'pet/:' + URL_PARAMS.petId + '/edit', component: PetEditComponent}
];
