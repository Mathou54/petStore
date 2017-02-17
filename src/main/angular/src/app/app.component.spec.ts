/* tslint:disable:no-unused-variable */

import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {Location} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(() => {

    let mockLocation = {
      path: function () {
      }
    };

    spyOn(mockLocation, 'path').and.returnValue('/truc/machin')

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [{provide: Location, useValue: mockLocation}]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('isActive should return true if it ends with the ', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;

    expect(app.isActive('/truc/machin')).toBeTruthy();
  }));
});
