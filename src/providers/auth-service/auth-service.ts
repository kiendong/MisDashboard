import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://id.ocd.vn/';

@Injectable()
export class AuthService {

  constructor(public http: Http) { }

  login(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'Basic ' + 'bW9iaWxlOm1vYmlsZW1pc29jZA==');
      let options = new RequestOptions({ headers: headers });

      let params = new URLSearchParams();
      params.set('grant_type', 'password');
      params.set('username', credentials.username);
      params.set('password', credentials.password);
      params.set('scope', 'openid profile roles publicApi mail email all_claims offline_access');

      this.http.post(apiUrl + "identity/connect/token", params, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  refeshToken(refeshToken) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.append('Authorization', 'Basic ' + 'bW9iaWxlOm1vYmlsZW1pc29jZA==');
      let options = new RequestOptions({ headers: headers });
      let params = new URLSearchParams();
      params.set('grant_type', 'refresh_token');
      params.set('refresh_token', refeshToken);
      this.http.post(apiUrl + "identity/connect/token", params, options)
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  loadUser(token) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json;charset=utf-8');
    headers.append("Data-type", "json");
    headers.append('Authorization', 'Bearer ' + token);

    let options = new RequestOptions({ headers: headers });
    // don't have the data yet
    return new Promise((resolve, reject) => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get(apiUrl + 'identity/connect/userinfo', options)
        .subscribe(data => {
          console.log("loadUser");
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          resolve(data.json());
          //debugger;
        }, (err) => {
          reject(err);
        });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(apiUrl + 'guest/signup', JSON.stringify(data), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.clear();
      resolve(true);
    });
  }

}
