import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {routes} from "./app.route";
import {AppComponent} from "./app.component";
import {ListComponent} from "./pet/list/list.component";
import {PetComponent} from "./pet/list/pet/pet.component";
import {PetDetailComponent} from "./pet/pet-detail/pet-detail.component";
import {PetService} from "./services/pet/pet.service";
import {AlertsComponent} from "./components/alerts/alerts.component";
import {HttpErrorsService} from "./services/http-errors/http-errors.service";
import {AlertsService} from "./components/alerts/alerts.service";
import {PetEditComponent} from "./pet-edit/pet-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PetComponent,
    PetDetailComponent,
    AlertsComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpErrorsService,
    AlertsService,
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
