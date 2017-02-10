/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpErrorsService } from './http-errors.service';

describe('HttpErrorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpErrorsService]
    });
  });

  it('should ...', inject([HttpErrorsService], (service: HttpErrorsService) => {
    expect(service).toBeTruthy();
  }));
});
