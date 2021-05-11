/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {AlertsComponent} from './alerts.component';
import {AlertsService} from './alerts.service';

describe('AlertsComponent', () => {
	let component: AlertsComponent;
	let fixture: ComponentFixture<AlertsComponent>;

	beforeEach(waitForAsync(() => {

		const mockAlertsService = {
			getAlerts: function () {
			}
		};

		spyOn(mockAlertsService, 'getAlerts');

		TestBed.configureTestingModule({
			declarations: [AlertsComponent],
			providers: [{provide: AlertsService, useValue: mockAlertsService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AlertsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
