import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import { App, LoadingController, ToastController } from 'ionic-angular';

import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';

import { LoginPage } from '../login/login';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);

//API
// import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //chart parameter
  chartTotalSales: any;
  chartTarget: any;
  chartLastYear: any;
  chartService: any;
  chartRegion: any;
  chartDealDonut: any;
  LastYearRevenue: any;
  // login
  loading: any;
  isLoggedIn: boolean = false;
  abc = 80;
  //position chart parameter
  numbers = [1, 2, 3, 4, 5, 6, 7];
  chartPositionsdefault = {
    "chartDealDonut": 1,
    "chartTotalSales": 2,
    "chartTarget": 3,
    "chartLastYear": 4,
    "chartLastYearRevenue": 5,
    "chartService": 6,
    "chartRegion": 7
  };
  chartPositions: object;
  chartDealDonutPosition = '';
  //API
  getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
  token = '';
  ngayBatDau: Date = new Date('2017/03/31');
  ngayKetThuc: Date = new Date('2018/02/05');
  jsonNgayBatDau = this.ngayBatDau.toJSON();
  jsonNgayKetThuc = this.ngayKetThuc.toJSON();

  chartDealDonutAPI: object;
  constructor(public navCtrl: NavController,
    public app: App,
    public http: Http,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    //check login and back to login pages
    if (localStorage.getItem("token")) {
      this.isLoggedIn = true;
      this.token = localStorage.getItem("token");
    }
    // check and redirect to login page
    if (!localStorage.getItem("token")) {
      navCtrl.setRoot(LoginPage);
    }
    // API chart call
    let Params = new HttpParams();
    Params = Params.set('ngayBatDau', this.jsonNgayBatDau);
    Params = Params.set('ngayKetThuc', this.jsonNgayKetThuc);
    // console.log(this.getCurrentFinancialYear(););

    console.log(this.chartDealDonutAPI);
    // save position chart to localstorage
    if (!localStorage.getItem("chartPositions")) {
      localStorage.setItem('chartPositions', JSON.stringify(this.chartPositionsdefault));
    }
    if (localStorage.getItem("chartPositions")) {
      this.chartPositions = JSON.parse(localStorage.getItem("chartPositions"));
    }

  }
  // get financialYear
  //   function getCurrentFinancialYear() {
  //   let fiscalyear:string = '';
  //   let today = new Date();
  //   if ((today.getMonth() + 1) <= 3) {
  //     fiscalyear = (today.getFullYear() - 1) + "-" + today.getFullYear()
  //   } else {
  //     fiscalyear = today.getFullYear() + "-" + (today.getFullYear() + 1)
  //   }
  //   return fiscalyear
  // }

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
  //  Ẩn hiện toàn bộ grid
  // removePost(number) {
  //   let index = this.numbers.indexOf(number);

  //   if (index > -1) {
  //     this.numbers.splice(index, 1);
  //   }
  // }
  logout() {
    this.authService.logout().then((result) => {
      this.loadingCtrl.create();
      let nav = this.app.getRootNav();
      nav.setRoot(LoginPage);
    }, (err) => {
      this.loadingCtrl.create();
      this.presentToast(err);
    });
  }
  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
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
  buildchartDealDonut(data) {
    return HighCharts.chart('chartDealDonut', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      credits: {
        enabled: false
      },

      title: {
        text: ' '
      },

      pane: {
        startAngle: - 120,
        endAngle: 120,
        background: false
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        // chiều rộng của các vạch thước kẻ nhỏ
        minorTickWidth: 0,
        // Khoảng các của các vạch thước kẻ nhỏ
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#7D7D7D',
        // vị trí số trên chart cách nhau 30 đơn vị
        tickPixelInterval: 30,
        // chiều rộng của các vạch thước kẻ chính 
        tickWidth: 1,
        tickPosition: 'inside',
        // chiều dài của các vạch thước kẻ chính
        tickLength: 10,
        tickColor: '#7D7D7D',
        labels: {
          // số hiển thị trên thước đo
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: ' ',
        },
        plotBands: [{
          from: 0,
          to: 120,
          color: '#55BF3B' // green
        }, {
          from: 120,
          to: 160,
          color: 'yellow' // yellow
        }, {
          from: 160,
          to: 200,
          color: '#DF5353' // red
        }]
      },
      plotOptions: {
        series: {
          // data label là số ở giữa chart
          dataLabels: {
            enabled: false,
            color: 'black',
            borderWidth: 0,
            style: {
              textShadow: false,
              fontSize: '18px',
            }
          },
          showInLegend: true
        },
      },
      tooltip: {
        // chỗ này format cho tooltip hiện lên
        // pointFormat: '{series.name}  <b>{point.percentage:.1f}%</b>',
        // formatter: function () {
        //   return 'The value for <b>' + this.x +
        //     '</b> is <b>' + this.y + '</b>';
        // }

        enabled: true, formatter: function () {
          return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + HighCharts.numberFormat(this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
        }
      },
      legend: {
        labelFormatter: function () {
          // Lấy cả số liệu của y và x data
          return '<span style="font-size:16px; font-weight: normal">' + this.name + ': ' + this.y + ' d </span>';
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: data
      }]

    });
  }

  ionViewDidLoad() {
    let that = this;
    //chartDealDonut
    this.showLoader();
    that.connectWithAuth('GET', that.getUrl + "Mobile_Deal", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON() }, that.token).then((result) => {
      // this.loading.dismiss();
      // that.chartDealDonutAPI = result;
      that.chartDealDonut = that.buildchartDealDonut(result);
      localStorage.setItem('chartDealDonutAPI', JSON.stringify(result));
      // turn off loading
      this.loading.dismiss();
    }, (err) => {

      this.presentToast(err);
    });

    this.chartTotalSales = HighCharts.chart('chartTotalSales', {
      chart: {
        type: 'solidgauge'
      },
      credits: {
        enabled: false
      },

      title: {
        text: ' '
      },
      tooltip: {
        // thêm % sau số liệu khi rê chuột
        valueSuffix: '%'
      },
      yAxis: {
        min: 0,
        max: 200,
        lineWidth: 0,
        tickPositions: []
      },
      plotOptions: {
        solidgauge: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        },
        series: {
          colorByPoint: false
        }
      },
      legend: {
        labelFormatter: function () {
          var total = 0;
          var total1 = 0;
          // Lấy cả số liệu của y và x data
          for (var i = this.yData.length; i--;) { total += this.yData[i]; total1 += this.xData[i]; };
          //return '<span style="font-size:12px;">' + this.name + ': ' + total + '% - ' + total1 + '</span>';
          return '<span style="font-size:16px; font-weight: normal">' + this.name + ': ' + total1 + ' M' + '</span>';
        }
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
          outerRadius: '98%',
          innerRadius: '96%',
          backgroundColor: '#63CC32',
          borderWidth: 0,
          dashStyle: 'longdashdot'
        }, { // Track for Exercise
          outerRadius: '78%',
          innerRadius: '76%',
          backgroundColor: '#9A59B5',
          dashStyle: 'shortdot',
          borderWidth: 0
        }]
      },
      series: [{
        color: '#63CC32',
        name: 'Total sales (HD) ',
        data: [{
          radius: '100%',
          innerRadius: '94%',
          y: 140,
          x: 39.986
        }]
      }, {
        color: '#9A59B5',
        name: 'Total sales (DT) ',
        data: [{
          radius: '80%',
          innerRadius: '74%',
          y: 65,
          x: 33.996
        }]
      }],

    });
    this.chartTarget = HighCharts.chart('chartTarget', {
      chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      credits: {
        enabled: false
      },

      title: {
        text: ' '
      },

      pane: {
        startAngle: - 120,
        endAngle: 120,
        background: false
      },

      // the value axis
      yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        // chiều rộng của các vạch thước kẻ nhỏ
        minorTickWidth: 0,
        // Khoảng các của các vạch thước kẻ nhỏ
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#7D7D7D',
        // vị trí số trên chart cách nhau 30 đơn vị
        tickPixelInterval: 30,
        // chiều rộng của các vạch thước kẻ chính 
        tickWidth: 1,
        tickPosition: 'inside',
        // chiều dài của các vạch thước kẻ chính
        tickLength: 10,
        tickColor: '#7D7D7D',
        labels: {
          // số hiển thị trên thước đo
          step: 2,
          rotation: 'auto'
        },
        title: {
          text: ' ',
        },
        plotBands: [{
          from: 0,
          to: 120,
          color: '#55BF3B' // green
        }, {
          from: 120,
          to: 160,
          color: 'yellow' // yellow
        }, {
          from: 160,
          to: 200,
          color: '#DF5353' // red
        }]
      },
      plotOptions: {
        series: {
          // data label là số ở giữa chart
          dataLabels: {
            enabled: false,
            color: 'black',
            borderWidth: 0,
            style: {
              textShadow: false,
              fontSize: '18px',
            }
          },
          showInLegend: true
        },
      },
      legend: {
        // remove symbol
        symbolHeight: .001,
        symbolWidth: .001,
        symbolRadius: .001,
        labelFormatter: function () {
          var total = 0;
          // Lấy cả số liệu của y và x data
          for (var i = this.yData.length; i--;) { total += this.yData[i]; };
          //return '<span style="font-size:12px;">' + this.name + ': ' + total + '% - ' + total1 + '</span>';
          // return '<span style="font-size:16px;">' + 'Now: ' + total + '%/ 200%' + '</span>';
          return '<span style="font-size:16px; font-weight:normal">' + '39.986 M ' + '</span>' + ' vs ' + '<span style="font-size:16px; font-weight:normal">' + '27.000 M' + '</span>';

        }
      },
      series: [{
        name: 'Target',
        data: [this.abc],
        tooltip: {
          valueSuffix: ' /200'
        }
      }]

    });
    this.chartLastYear = HighCharts.chart('chartLastYear', {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: ' '
      },
      legend: {
        enabled: false
        // layout: 'vertical',
        // align: 'left',
        // verticalAlign: 'top',
        // x: 150,
        // y: 100,
        // floating: true,
        // borderWidth: 1,
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
        title: {
          text: ' '
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' K'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: '2016',
        data: [3, 4, 3, 5, 4, 10, 12, 3, 4, 3, 5, 4],
        color: '#EDEDED',
      }, {
        name: '2017',
        color: '#9BDB80',
        data: [1, 3, 4, 3, 3, 5, 4, 1, 3, 4, 3, 3]
      }]
    });
    this.chartLastYear = HighCharts.chart('chartLastYearRevenue', {
      chart: {
        type: 'areaspline'
      },
      title: {
        text: ' '
      },
      legend: {
        enabled: false
        // layout: 'vertical',
        // align: 'left',
        // verticalAlign: 'top',
        // x: 150,
        // y: 100,
        // floating: true,
        // borderWidth: 1,
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
        title: {
          text: ' '
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' K'
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5
        }
      },
      series: [{
        name: '2016',
        data: [3, 4, 3, 5, 4, 10, 12, 3, 4, 3, 5, 4],
        color: '#EDEDED',
      }, {
        name: '2017',
        color: '#9BDB80',
        data: [1, 3, 4, 3, 3, 5, 4, 1, 3, 4, 3, 3]
      }]
    });
    this.chartService = HighCharts.chart('chartService', {
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
          return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + HighCharts.numberFormat(this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
        data: [{
          name: 'Nghiên cứu thị trường',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Đào tạo quản lý',
          y: 10.38
        }, {
          name: 'Tư vấn chiến lược',
          y: 4.77
        }, {
          name: 'Tư vấn hệ thông',
          y: 0.91
        }, {
          name: 'Dịch vụ khác',
          y: 0.2
        }]
      }]
    });
    this.chartRegion = HighCharts.chart('chartRegion', {

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
        enabled: true, formatter: function () {
          return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + HighCharts.numberFormat(this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
            //Không hiển thị các râu label
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: ' ',
        colorByPoint: true,
        data: [{
          name: 'Bình Phước',
          y: 24.03
        }, {
          name: 'Đà Nẵng',
          y: 10.38
        }, {
          name: 'Đồng Tháp',
          y: 4.77
        }, {
          name: 'An Giang',
          y: 0.91
        }, {
          name: 'Long An',
          y: 0.2
        }, {
          name: 'Hà Nội',
          y: 24.03,
        }, {
          name: 'Bến Tre',
          y: 10.38
        }, {
          name: 'Sóc Trăng',
          y: 4.77
        }, {
          name: 'Gia Lai',
          y: 0.91
        }, {
          name: 'Hồ Chí Minh',
          y: 0.2
        }]
      }]

    });

  }

}
