import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
//API
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { App, LoadingController, ToastController } from 'ionic-angular';


/**
 * Generated class for the DealSourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);

@IonicPage()
@Component({
  selector: 'page-deal-source',
  templateUrl: 'deal-source.html',
})
export class DealSourcePage {
  chartSources: any;
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
  TinhTrangClosure = [];
  totalDealsource = 0;
  statusSelect = 0;

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
  buildchartSources(data) {
    let modifydata = [];
    data.forEach(element => {
      let commentData = {
        name: element.Label,
        y: Math.round(element.SoLuong * 100) / 100
      };
      modifydata.push(commentData);
    });

    return HighCharts.chart('chartSources', {

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      credits: {
        enabled: false
      },

      title: {
        text: ' '
      },
      tooltip: {
        // chỗ này format cho tooltip hiện lên
        // pointFormat: '{series.name}  <b>{point.percentage:.1f}%</b>',
        // formatter: function () {
        //   return 'The value for <b>' + this.x +
        //     '</b> is <b>' + this.y + '</b>';
        // }

        enabled: true, formatter: function () {
          return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + HighCharts.numberFormat(this.point.y, 0, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
        }
      },
      legend: {
        labelFormatter: function () {
          // Lấy cả số liệu của y và x data
          return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: ' ',
        colorByPoint: true,
        data: modifydata
        // [{
        //   name: 'PCDongThap',
        //   y: 24.03,
        //   sliced: true,
        //   selected: true
        // }, {
        //   name: 'Vinalines',
        //   y: 10.38
        // }, {
        //   name: 'EVNHN',
        //   y: 4.77
        // }, {
        //   name: 'BacNinhPC',
        //   y: 5
        // }, {
        //   name: 'RedSun',
        //   y: 18
        // }, {
        //   name: 'PCLongAn',
        //   y: 0.5
        // }, {
        //   name: 'VETC',
        //   y: 2
        // }]
      }]
    });
  }
  loadChartCall(tinhtrang) {
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
      // Draw chartSector
      that.connectWithAuth('GET', that.getUrl + "Report_DealSource_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), IDTinhTrang: tinhtrang }, that.token).then((result) => {
        // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
        that.chartSources = that.buildchartSources(result);
        result.forEach(element => {
          that.totalDealsource = that.totalDealsource + element.SoLuong;
        });
        that.totalDealsource = Math.round(that.totalDealsource * 100) / 100;
        that.ArrayFinancialMonth = result.Category_Date;
        that.loading.dismiss();
      }, (err) => {
        this.presentToast(err);
      });
      // End chartSector


    }, (err) => {
      this.presentToast(err);
    });


  }
  ionViewDidLoad() {
    let that = this;
    this.loadChartCall(0);
    // TinhTrangClosure
    that.connectWithAuth('GET', that.getUrl + "TinhTrangClosure", {}, that.token).then((result) => {
      // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
      that.TinhTrangClosure = result;
      that.loading.dismiss();
    }, (err) => {
      this.presentToast(err);
    });
    // End TinhTrangClosure
  }
}
