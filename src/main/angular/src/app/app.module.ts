import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {routes} from "./app.route";

import {AppComponent} from './app.component';
import {ListComponent} from './pet/list/list.component';
import {PetComponent} from './pet/list/pet/pet.component';
import { PetDetailComponent } from './pet/pet-detail/pet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PetComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
