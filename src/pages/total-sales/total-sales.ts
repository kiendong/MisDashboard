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
 * Generated class for the TotalSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-sales',
  templateUrl: 'total-sales.html',
})
export class TotalSalesPage {
  chartSales: any;
  chartSalesBD2HD: any;
  chartSalesBD1DT: any;
  chartSalesBD2DT: any;
  // login
  loading: any;
  isLoggedIn: boolean = false;
  //API
  getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
  token = '';
  ngayBatDau: Date = new Date('2017/03/31');
  ngayKetThuc: Date = new Date('2018/02/05');
  toDay: Date = new Date();
  financialYear: Date;
  financialDayStart: Date;
  financialDayEnd: Date;
  financialLastYear: Date;
  strFinancialYear: number;
  ArrayFinancialMonth = [];
  totalSale1 = 0;
  totalSale2 = 0;
  totalSale3 = 0;
  totalSale4 = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App,
    public http: Http,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    //check login and back to login pages
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
  buildchartSales(data) {

    // debugger;
    return HighCharts.chart('chartSales', {
      chart: {
        type: 'area'
      },
      title: {
        text: ' '
      },
      legend: {
        enabled: false
        // labelFormatter: function () {
        //   // Lấy cả số liệu của y và x data
        //   return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
        // },


        // verticalAlign: 'bottom',
        // backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
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
          text: 'K'
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' ',
        formatter: function () {
          var s = '<b>' + this.x + '</b>';
          this.points.forEach(element => {
            if (element.y != 0) {
              s += '<br/>' + '<span style = "font-size:16px; font-weight: normal">' + element.series.name + ': </span>' +
                '<b>' + element.y + ' K</b>';
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
          stacking: 'normal',
          lineColor: '#666666',
          // remove line border
          lineWidth: 0,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            // states: {
            //   hover: {
            //     enabled: false
            //   }
            // }
          }
        },
        showInLegend: false
      },

      series: data
      // [{
      //   name: 'Công ty Điện lực Đồng Tháp ',
      //   color: '#0CB6B5',
      //   data: [5964393, 237536, 178800, 3286304, 4603843, 6452665, 972900, 435885, 4395142, 420000, 480000, 490786],
      // }, {
      //   name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      //   color: '#F1654B',
      //   data: [237536, 435885, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900, 420000, 435885, 490786]
      // }, {
      //   name: 'Trung tâm CSKH KV miền Nam (EVNSPC.CC)',
      //   color: '#46B3D2',
      //   data: [4603843, 6452665, 972900, 435885, 4395142, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900],
      // }, {
      //   name: 'Tổng Công ty Hàng hải Việt nam Vinalines',
      //   color: '#F78F1E',
      //   data: [435885, 4395142, 6452665, 435885, 435885, 6452665, 435885, 420000, 490786, 6452665, 972900, 435885]
      // }, {
      //   name: 'FIRST-NASATI PMU',
      //   color: '#1A764E',
      //   data: [6452665, 435885, 435885, 6452665, 435885, 178800, 3286304, 4603843, 6452665, 972900, 435885, 420000],
      // }]
    });
  }

  buildchartSalesBD1DT(data) {
    return HighCharts.chart('chartSalesBD1DT', {
      chart: {
        type: 'area'
      },
      title: {
        text: ' '
      },
      legend: {
        enabled: false
        // labelFormatter: function () {
        //   // Lấy cả số liệu của y và x data
        //   return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
        // },


        // verticalAlign: 'bottom',
        // backgroundColor: (HighCharts.theme && HighCharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      xAxis: {
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
          text: 'K'
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' ',
        formatter: function () {
          var s = '<b>' + this.x + '</b>';
          this.points.forEach(element => {
            if (element.y != 0) {
              s += '<br/>' + '<span style = "font-size:16px; font-weight: normal">' + element.series.name + ': </span>' +
                '<b>' + element.y + ' K</b>';
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
          stacking: 'normal',
          lineColor: '#666666',
          // remove line border
          lineWidth: 0,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            // states: {
            //   hover: {
            //     enabled: true
            //   }
            // }
          }
        },
        showInLegend: false
      },

      series: data
      // [{
      //   name: 'Công ty Điện lực Đồng Tháp ',
      //   color: '#0CB6B5',
      //   data: [5964393, 237536, 178800, 3286304, 4603843, 6452665, 972900, 435885, 4395142, 420000, 480000, 490786],
      // }, {
      //   name: 'Tập đoàn Điện lực Việt Nam (EVN)',
      //   color: '#F1654B',
      //   data: [237536, 435885, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900, 420000, 435885, 490786]
      // }, {
      //   name: 'Trung tâm CSKH KV miền Nam (EVNSPC.CC)',
      //   color: '#46B3D2',
      //   data: [4603843, 6452665, 972900, 435885, 4395142, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900],
      // }, {
      //   name: 'Tổng Công ty Hàng hải Việt nam Vinalines',
      //   color: '#F78F1E',
      //   data: [435885, 4395142, 6452665, 435885, 435885, 6452665, 435885, 420000, 490786, 6452665, 972900, 435885]
      // }, {
      //   name: 'FIRST-NASATI PMU',
      //   color: '#1A764E',
      //   data: [6452665, 435885, 435885, 6452665, 435885, 178800, 3286304, 4603843, 6452665, 972900, 435885, 420000],
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

      // Draw chart totalsale BD1 HD
      that.connectWithAuth('GET', that.getUrl + "Report_TotalSale_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1', strLoaiGiaTri: 'HopDong' }, that.token).then((result) => {
        localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
        that.chartSales = that.buildchartSales(result);
        that.ArrayFinancialMonth = result.Category_Date;
        result.forEach(element => {
          (element.data).forEach(elm => {
            that.totalSale1 = that.totalSale1 + elm;
          });
        });
        that.totalSale1 = Math.round(that.totalSale1 * 100) / 100;

      }, (err) => {
        this.presentToast(err);
      });
      // End totalsale BD2 HD

      // Draw chart totalsale BD1 DT
      that.connectWithAuth('GET', that.getUrl + "Report_TotalSale_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1', strLoaiGiaTri: 'DoanhThu' }, that.token).then((result) => {
        localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
        that.chartSalesBD1DT = that.buildchartSalesBD1DT(result);
        that.ArrayFinancialMonth = result.Category_Date;
        result.forEach(element => {
          element.data.forEach(elm => {
            that.totalSale3 = that.totalSale3 + elm;
          });
        });
        that.totalSale3 = Math.round(that.totalSale3 * 100) / 100;
      }, (err) => {
        this.presentToast(err);
      });
      // End totalsale BD1 DT

      that.loading.dismiss();
    }, (err) => {
      this.presentToast(err);
    });

  }

}
