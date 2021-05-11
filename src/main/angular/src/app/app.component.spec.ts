/* tslint:disable:no-unused-variable */

import {TestBed, waitForAsync} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
	beforeEach(waitForAsync(() => {

		// const mockLocation = {
		// 	path: function () {
		// 	}
		// };
		//
		// spyOn(mockLocation, 'path').and.returnValue('/truc/machin');

		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent
			],
			// providers: [{provide: Location, useValue: mockLocation}]
		}).compileComponents();
	}));

	fit('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it('isActive should return true if it ends with the ', waitForAsync(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;

		expect(app.isActive('/truc/machin')).toBeTruthy();
	}));
});
