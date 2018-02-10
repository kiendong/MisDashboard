import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);

//API
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { App, LoadingController, ToastController } from 'ionic-angular';

/**
 * Generated class for the IncomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incoming',
  templateUrl: 'incoming.html',
})
export class IncomingPage {
  chartIncoming: any;
  chartIncomingBD2: any;
  // login
  loading: any;
  isLoggedIn: boolean = false;
  //API
  getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
  token = '';
  toDay: Date = new Date();
  financialYear: Date;
  financialDayStart: Date;
  financialDayEnd: Date;
  financialLastYear: Date;
  strFinancialYear: number;
  ArrayFinancialMonth = [];
  totalDealBD1 = 0;
  totalDealBD2 = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App,
    public http: Http,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
      let tokenObject = JSON.parse(localStorage.getItem("token"));
      this.token = tokenObject.access_token;
      this.RefeshToken(tokenObject).then((result) => {
      }, (err) => {
        this.loading.dismiss();
        this.presentToast(err);
      });
    }
  }
  RefeshToken(TokenObject) {
    return new Promise((resolve, reject) => {
      this.authService.refeshToken(TokenObject.refresh_token).then((result) => {
        localStorage.setItem('token', JSON.stringify(result));
      }, (err) => {
        this.presentToast(err);
      });
    });
  }
  // API Call function
  connectWithAuth(pmethod, URL, data, token) {
    let headers = new Headers({
      "Data-type": "json",
      'Content-type': 'application/json;charset=utf-8',
      'Authorization': 'Bearer ' + token,
    });
    let options = new RequestOptions({ headers: headers });

    if (pmethod == "GET") {
      options.search = data;
      // return this.http.get(URL, options).map(res => res.json()).toPromise();
      return new Promise((resolve, reject) => {
        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data.
        this.http.get(URL, options)
          .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            resolve(data.json());
            //debugger;
          }, (err) => {
            reject(err);
          });
      });
    }
    else if (pmethod == "POST") {
      return this.http.post(URL, JSON.stringify(data), options).map(res => res.json()).toPromise();
    }
    else if (pmethod == "PUT") {
      return this.http.put(URL, data, options).map(res => res.json()).toPromise();
    }
    else if (pmethod == "DELETE") {
      return this.http.delete(URL, options).map(res => res.json()).toPromise();
    }
  }
  // Logout and loading function
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading API...'
    });

    this.loading.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  buildchartIncoming(data) {
    return HighCharts.chart('chartIncoming', {
      chart: {
        type: 'area'
      },
      title: {
        text: ' '
      },
      legend: {
        labelFormatter: function () {
          // Lấy cả số liệu của y và x data
          return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
        },
        verticalAlign: 'bottom',
        backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
        startOnTick: false,
        endOnTick: false,
        min: 0,
        categories: [
          'T4',
          'T5',
          'T6',
          'T7',
          'T8',
          'T9',
          'T10',
          'T11',
          'T12',
          'T1',
          'T2',
          'T3'
        ]
      },
      yAxis: {
        // title bên trái
        title: {
          text: 'Deal'
        },
        min: 0
      },
      tooltip: {
        shared: true,
        valueSuffix: ' ',
        formatter: function () {
          var s = '<b>' + this.x + '</b>';
          this.points.forEach(element => {
            if (element.y != 0) {
              s += '<br/>' + '<span style = "font-size:16px; font-weight: normal">' + element.series.name + ': ' +
                element.y + '</span>';
            }
          });
          return s;
        },
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        area: {
          colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        },
        showInLegend: true
      },

      series: data

      //[{
      //   name: 'Đỗ Thị Hiên',
      //   color: '#0CB6B5',
      //   data: [7, 9, 7, 1, 0, 0, 1, 7, 0, 4, 1, 0],
      // }, {
      //   name: 'Hoàng Thanh Hương',
      //   color: '#F1654B',
      //   data: [5, 2, 0, 0, 1, 0, 1, 0, 5, 0, 2, 0]
      // }, {
      //   name: 'Hoàng Thị Thúy Nga',
      //   color: '#46B3D2',
      //   data: [6, 8, 8, 3, 4, 10, 5, 8, 3, 7, 4, 0]
      // }, {
      //   name: 'Phan Thị Ngọc Cẩm',
      //   color: '#F78F1E',
      //   data: [4, 2, 3, 3, 0, 0, 1, 2, 1, 0, 4, 0],
      // }, {
      //   name: 'Tăng Văn Khánh',
      //   color: '#1A764E',
      //   data: [14, 22, 8, 11, 13, 12, 13, 14, 18, 11, 13, 0]
      // }]
    });
  }
  buildchartIncomingBD2(data) {
    return HighCharts.chart('chartIncomingBD2', {
      chart: {
        type: 'area'
      },
      title: {
        text: ' '
      },
      legend: {
        labelFormatter: function () {
          // Lấy cả số liệu của y và x data
          return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
        },
        verticalAlign: 'bottom',
        backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
        startOnTick: false,
        endOnTick: false,
        min: 0,
        categories: [
          'T4',
          'T5',
          'T6',
          'T7',
          'T8',
          'T9',
          'T10',
          'T11',
          'T12',
          'T1',
          'T2',
          'T3'
        ]
      },
      yAxis: {
        // title bên trái
        title: {
          text: 'Deal'
        },
        min: 0
      },
      tooltip: {
        shared: true,
        valueSuffix: ' ',
        formatter: function () {
          var s = '<b>' + this.x + '</b>';
          this.points.forEach(element => {
            if (element.y != 0) {
              s += '<br/>' + '<span style = "font-size:16px; font-weight: normal">' + element.series.name + ': ' +
                element.y + '</span>';
            }
          });
          return s;
        },
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        },
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        },
        showInLegend: true
      },

      series: data
      // [{
      //   name: 'Đỗ Thị Hiên',
      //   color: '#0CB6B5',
      //   data: [7, 9, 7, 1, 0, 0, 1, 7, 0, 4, 1, 0],
      // }, {
      //   name: 'Hoàng Thanh Hương',
      //   color: '#F1654B',
      //   data: [5, 2, 0, 0, 1, 0, 1, 0, 5, 0, 2, 0]
      // }, {
      //   name: 'Hoàng Thị Thúy Nga',
      //   color: '#46B3D2',
      //   data: [6, 8, 8, 3, 4, 10, 5, 8, 3, 7, 4, 0]
      // }, {
      //   name: 'Phan Thị Ngọc Cẩm',
      //   color: '#F78F1E',
      //   data: [4, 2, 3, 3, 0, 0, 1, 2, 1, 0, 4, 0],
      // }, {
      //   name: 'Tăng Văn Khánh',
      //   color: '#1A764E',
      //   data: [14, 22, 8, 11, 13, 12, 13, 14, 18, 11, 13, 0]
      // }]
    });
  }
  ionViewDidLoad() {
    let that = this;
    that.showLoader();
    // get financial year
    that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then((result) => {
      that.financialYear = new Date(result.ApDungTuNgay);

      that.financialDayStart = new Date(result.Tu);
      that.financialDayEnd = new Date(result.Den);
      // create financial last year.
      that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
      that.strFinancialYear = this.financialYear.getFullYear();

      // Draw chart Incoming BD1
      that.connectWithAuth('GET', that.getUrl + "Report_TotalDealIncoming_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1' }, that.token).then((result) => {
        localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
        that.chartIncoming = that.buildchartIncoming(result);
        that.ArrayFinancialMonth = result.Category_Date;
        result.forEach(element => {
          element.data.forEach(elm => {
            that.totalDealBD1 = that.totalDealBD1 + elm;
          });
        });
        that.loading.dismiss();
      }, (err) => {
        this.presentToast(err);
      });
      // End Incoming BD1

      // Draw chart Incoming BD2
      that.connectWithAuth('GET', that.getUrl + "Report_TotalDealIncoming_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD2' }, that.token).then((result) => {
        localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
        that.chartIncomingBD2 = that.buildchartIncomingBD2(result);
        that.ArrayFinancialMonth = result.Category_Date;
        result.forEach(element => {
          element.data.forEach(elm => {
            that.totalDealBD2 = that.totalDealBD2 + elm;
          });
        });
      }, (err) => {
        this.presentToast(err);
      });
      // End Incoming BD2

    }, (err) => {
      this.presentToast(err);
    });
  }

}
