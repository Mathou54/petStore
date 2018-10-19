import {Injectable} from '@angular/core';

import {Alert} from './alert';

@Injectable()
export class AlertsService {

	private alerts: Alert[] = [];

	constructor() {
	}

	getAlerts(): Alert[] {
		return this.alerts;
	}

	addAlert(alert: Alert): Alert[] {
		this.alerts.push(alert);
		return this.getAlerts();
	}

	removeAlert(index): Alert[] {
		this.alerts.splice(index);
		return this.getAlerts();
	}

}
