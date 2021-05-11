import {Component, OnInit} from '@angular/core';
import {Alert} from './alert';
import {AlertsService} from './alerts.service';

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

	alerts: Alert[];

	constructor(private alertsService: AlertsService) {
	}

	ngOnInit() {
		this.alerts = this.alertsService.getAlerts();
	}

	close(index: number): void {
		this.alerts = this.alertsService.removeAlert(index);
	}

}
