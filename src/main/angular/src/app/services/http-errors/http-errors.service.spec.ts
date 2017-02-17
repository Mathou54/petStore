/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {HttpErrorsService} from "./http-errors.service";
import {AlertsService} from "../../components/alerts/alerts.service";

describe('HttpErrorsService', () => {

  let mockAlertsService = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorsService,
        {provide: AlertsService, useValue: mockAlertsService}]
    });
  });

  it('should create', inject([HttpErrorsService], (service: HttpErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
