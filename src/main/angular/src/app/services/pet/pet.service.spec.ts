/* tslint:disable:no-unused-variable */

import {TestBed, inject} from "@angular/core/testing";
import {PetService} from "./pet.service";
import {Http} from "@angular/http";
import {HttpErrorsService} from "../http-errors/http-errors.service";
import {Pet} from "../../model/pet";

describe('PetService', () => {

  let mockPetService = {};
  let mockHttp = {
    get: function () {
    },
    post: function () {
    },
    put: function () {
    },
    delete: function () {
    }
  };
  let mockHttpErrorsService = {
    handleError: function () {
    }
  };


  beforeEach(() => {

    spyOn(mockHttp, 'get').and.returnValue({
      catch: function () {
        return {
          map: function () {
          }
        };
      }
    });
    spyOn(mockHttp, 'post').and.returnValue({
      catch: function () {
        return {
          map: function () {
          }
        };
      }
    });
    spyOn(mockHttp, 'put').and.returnValue({
      catch: function () {
        return {
          map: function () {
          }
        };
      }
    });
    spyOn(mockHttp, 'delete').and.returnValue({
      catch: function () {
        return {
          map: function () {
          }
        };
      }
    });

    spyOn(mockHttpErrorsService, 'handleError').and.returnValue(function () {
    });

    TestBed.configureTestingModule({
      providers: [PetService,
        {provide: Http, useValue: mockHttp},
        {provide: HttpErrorsService, useValue: mockHttpErrorsService}]
    });
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));

  it('list should call http', inject([PetService], (service: PetService) => {
    service.list();
    expect(mockHttp.get).toHaveBeenCalled();
  }));

  it('get should call http', inject([PetService], (service: PetService) => {
    service.get(1);
    expect(mockHttp.get).toHaveBeenCalledWith(jasmine.stringMatching('/1'));
  }));

  it('create should call http', inject([PetService], (service: PetService) => {
    service.create(new Pet());
    expect(mockHttp.post).toHaveBeenCalled();
  }));

  it('update should call http', inject([PetService], (service: PetService) => {
    service.update(new Pet());
    expect(mockHttp.put).toHaveBeenCalled();
  }));

  it('remove should call http', inject([PetService], (service: PetService) => {
    service.remove(1);
    expect(mockHttp.delete).toHaveBeenCalledWith(jasmine.stringMatching('/1'));
  }));
});
