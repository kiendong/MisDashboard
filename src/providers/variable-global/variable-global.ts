import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VariableGlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VariableGlobalProvider {
  constructor(public http: HttpClient) {
    console.log('Hello VariableGlobalProvider Provider');
    // this.chartPositionSetting(this.chartPosition);
  }

}
