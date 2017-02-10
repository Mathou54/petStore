import {Injectable} from "@angular/core";
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {AlertsService} from "../../components/alerts/alerts.service";

@Injectable()
export class HttpErrorsService {

  constructor(private alertsService: AlertsService) {
  }

  public handleError() {
    let that = this;

    return function (error: Response | any) {
      let errMsg: string = error.json().message;
      console.error(errMsg);
      that.alertsService.addAlert({
        type: 'danger',
        text: errMsg
      });
      return Observable.throw(errMsg);
    };
  }

}
