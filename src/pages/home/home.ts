import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpParams } from '@angular/common/http';
import { AuthService } from '../../providers/auth-service/auth-service';
import { App, LoadingController, ToastController } from 'ionic-angular';
//High Chart
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
  chartLastYearRevenue: any;
  // login
  loading: any;
  isLoggedIn: boolean = false;
  //position chart parameter
  numbers = [1, 2, 3, 4, 5, 6, 7];
  chartPositionsdefault = {
    "chartTarget": 1,
    "chartDealDonut": 2,
    "chartTotalSales": 3,
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
  toDay: Date = new Date();
  financialYear: Date;
  financialDayStart: Date;
  financialDayEnd: Date;
  financialLastYear: Date;
  strFinancialYear: number;
  ArrayFinancialMonth = [];
  jsonNgayBatDau = this.ngayBatDau.toJSON();
  jsonNgayKetThuc = this.ngayKetThuc.toJSON();
  DealTotal: number = 0;
  SaleTotalHDNow: number = 0;
  SaleTotalHDTarget: number = 0;
  SaleTotalHDLastYear = 0;
  SaleTotalDTLastYear = 0;
  SaleTotalDTNow = 0
  ArraySaleHDNow = [];
  ArraySaleHDLastYear = [];
  ArraySaleDTNow = [];
  ArraySaleDTLastYear = [];
  chartDealDonutAPI: object;
  SalevsLastYearHD = {};
  SalevsLastYearDT = {};
  arrayTrendsHD = [];
  arrayTrendsDT = [];
  salesVsTargetTotal = 0;
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
    this.connectWithAuth('GET', this.getUrl + "Mobile_Deal", { ngayBatDau: this.ngayBatDau.toJSON(), ngayKetThuc: this.ngayKetThuc.toJSON() }, this.token).then((result) => {
      if (result == null) {
        localStorage.clear();
        navCtrl.setRoot(LoginPage);
      }
      this.chartDealDonut = this.buildchartDealDonut(result);

      localStorage.setItem('chartDealDonutAPI', JSON.stringify(result));
      this.DealTotal = result.TongSoDeal;
    }, (err) => {
      this.presentToast(err);
    });

    // API chart call
    let Params = new HttpParams();
    Params = Params.set('ngayBatDau', this.jsonNgayBatDau);
    Params = Params.set('ngayKetThuc', this.jsonNgayKetThuc);
    // save position chart to localstorage
    if (!localStorage.getItem("chartPositions")) {
      localStorage.setItem('chartPositions', JSON.stringify(this.chartPositionsdefault));
    }
    if (localStorage.getItem("chartPositions")) {
      this.chartPositions = JSON.parse(localStorage.getItem("chartPositions"));
    }

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
  //Chart build
  buildchartTarget(data) {
    return HighCharts.chart('chartTarget', {
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
          return '<span style="font-size:16px; font-weight:normal">' + Math.round(data[0].currentReal / 1000) + ' M </span>' + ' vs ' + '<span style="font-size:16px; font-weight:normal">' + Math.round(data[0].targetReal / 1000) + ' M </span>';

        }
      },
      series: [{
        name: 'Target',
        data: [Math.round(data[0].current)],
        tooltip: {
          valueSuffix: '%/ 200 %'
        }
      }]

    });
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
          return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + HighCharts.numberFormat(this.point.y, 0, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
        innerSize: '90%',
        data: data.Data
      }]

    });
  }
  buildchartTotalSales(data) {
    return HighCharts.chart('chartTotalSales', {
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
        valueSuffix: ' %/ 200 %'
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
          y: Math.round(data[0].current),
          x: Math.round(data[0].currentReal / 1000)
        }]
      }, {
        color: '#9A59B5',
        name: 'Revenues (DT) ',
        data: [{
          radius: '80%',
          innerRadius: '74%',
          y: Math.round(data[1].current),
          x: Math.round(data[1].currentReal / 1000)
        }]
      }],

    })
  }
  buildchartLastYear(data) {
    let dataDau = [];
    data.Data_Dau.forEach(element => {
      dataDau.push(Math.round(element / 1000));
    });
    let dataSau = [];
    data.Data_Sau.forEach(element => {
      dataSau.push(Math.round(element / 1000));
    });
    return HighCharts.chart('chartLastYear', {
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
        categories: data.Category_Date
      },
      yAxis: {
        title: {
          text: ' '
        }
      },
      tooltip: {
        shared: true,
        valueSuffix: ' M'
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
        name: data.Label_Dau,
        data: dataDau,
        color: '#EDEDED'
      }, {
        name: data.Label_Sau,
        data: dataSau,
        color: '#9BDB80',
      }]
    });
  }
  buildchartLastYearRevenue(data) {
    let dataDau = [];
    data.Data_Dau.forEach(element => {
      dataDau.push(Math.round(element / 1000));
    });
    let dataSau = [];
    data.Data_Sau.forEach(element => {
      dataSau.push(Math.round(element / 1000));
    });
    return HighCharts.chart('chartLastYearRevenue', {
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
        categories: data.Category_Date
      },
      yAxis: {
        title: {
          text: ' '
        }
      },
      tooltip: {
        // Chỗ này để gộp 2 giá trị của 2 chart thành một bảng
        shared: true,
        // Chỗ này thêm đơn vị đằng sau 
        valueSuffix: ' M'
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
        name: data.Label_Dau,
        data: dataDau,
        color: '#EDEDED'
      }, {
        name: data.Label_Sau,
        data: dataSau,
        color: '#9BDB80'
      }]
    });
  }
  buildchartService(data) {
    // khai báo giá trị mảng là rỗng thì khi push không bị lỗi
    let modifydata = [];
    data.forEach(element => {
      let commentData = {
        name: element.Label,
        y: Math.round(element.SoLuong / 1000)
      };
      modifydata.push(commentData);
    });
    return HighCharts.chart('chartService', {
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
      }]
    });
  }
  buildchartRegion(data) {
    let modifydata = [];
    data.forEach(element => {
      let commentData = {
        name: element.Label,
        y: Math.round(element.SoLuong / 1000)
      };

      modifydata.push(commentData);
    });
    return HighCharts.chart('chartRegion', {
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
            //Không hiển thị các râu label
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: ' ',
        colorByPoint: true,
        data: modifydata
      }]

    });
  }
  modifySalevsLastYearHD(sale, lastYear) {
    let SalevsLastYear = {
      TotalSale: 0,
      TotalLastYear: 0,
      arrayTrends: [],
      totalTrends: 0
    };
    sale.forEach(element => {
      SalevsLastYear.TotalSale = SalevsLastYear.TotalSale + element;
    });
    lastYear.forEach(element => {
      SalevsLastYear.TotalLastYear = SalevsLastYear.TotalLastYear + element;
    });
    SalevsLastYear.TotalSale = Math.round(SalevsLastYear.TotalSale / 1000);
    SalevsLastYear.TotalLastYear = Math.round(SalevsLastYear.TotalLastYear / 1000);
    this.SaleTotalHDLastYear = SalevsLastYear.TotalLastYear;
    for (let i = 0; i < sale.length; i++) {
      if (sale[i] - lastYear[i] == 0 || sale[i] == 0) {
        SalevsLastYear.arrayTrends.push(0);
      } else {
        let numberTrends = ((sale[i] - lastYear[i]) / sale[i]) * 100;
        SalevsLastYear.arrayTrends.push(Math.round(numberTrends));
      }
    }
    SalevsLastYear.totalTrends = Math.round(((SalevsLastYear.TotalSale - SalevsLastYear.TotalLastYear) / SalevsLastYear.TotalSale) * 100);
    return SalevsLastYear;
  }
  modifySalevsLastYearDT(sale, lastYear) {
    let SalevsLastYear = {
      TotalSale: 0,
      TotalLastYear: 0,
      arrayTrends: [],
      totalTrends: 0
    };
    sale.forEach(element => {
      SalevsLastYear.TotalSale = SalevsLastYear.TotalSale + element;
    });
    lastYear.forEach(element => {
      SalevsLastYear.TotalLastYear = SalevsLastYear.TotalLastYear + element;
    });
    SalevsLastYear.TotalSale = Math.round(SalevsLastYear.TotalSale / 1000);
    SalevsLastYear.TotalLastYear = Math.round(SalevsLastYear.TotalLastYear / 1000);
    for (let i = 0; i < sale.length; i++) {
      if (sale[i] - lastYear[i] == 0 || sale[i] == 0) {
        SalevsLastYear.arrayTrends.push(0);
      } else {
        let numberTrends = ((sale[i] - lastYear[i]) / sale[i]) * 100;
        SalevsLastYear.arrayTrends.push(Math.round(numberTrends));
      }
    }
    SalevsLastYear.totalTrends = Math.round(((SalevsLastYear.TotalSale - SalevsLastYear.TotalLastYear) / SalevsLastYear.TotalSale) * 100);
    return SalevsLastYear;
  }
  ionViewDidLoad() {
    let that = this;
    // temp loading 
    let loadchart = 0
    that.showLoader();
    //chartTotalSales
    // get financial year
    that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then((result) => {

      that.financialYear = new Date(result.ApDungTuNgay);
      that.financialDayStart = new Date(result.Tu);
      that.financialDayEnd = new Date(result.Den);
      // create financial last year.
      that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
      that.strFinancialYear = this.financialYear.getFullYear();
      localStorage.setItem('financialYearStorage', JSON.stringify(result.ApDungTuNgay));
      //chartDealDonut
      that.connectWithAuth('GET', that.getUrl + "Mobile_Deal", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON() }, that.token).then((result) => {
        that.chartDealDonut = that.buildchartDealDonut(result);

        localStorage.setItem('chartDealDonutAPI', JSON.stringify(result));
        that.DealTotal = result.TongSoDeal;
        loadchart = loadchart + 1;
      }, (err) => {
        this.presentToast(err);
      });
      // Draw chart chartTotalSales
      that.connectWithAuth('GET', that.getUrl + "Report_SaleTotal", { idTarget: that.strFinancialYear }, that.token).then((result) => {

        localStorage.setItem('chartTotalSalesAPI', JSON.stringify(result));
        that.SaleTotalHDNow = Math.round(result[0].currentReal / 1000);
        that.SaleTotalHDTarget = Math.round(result[0].targetReal / 1000);
        that.chartTotalSales = that.buildchartTotalSales(result);
        loadchart++;

      }, (err) => {
        this.presentToast(err);
      });
      // End chartTotalSales
      // Draw chart chartTarget
      that.connectWithAuth('GET', that.getUrl + "Report_SaleVsTarget_Read_Chart_Main", { idTarget: that.strFinancialYear, strLoaiGiaTri: 'HopDong' }, that.token).then((result) => {
        // debugger;
        localStorage.setItem('chartTargetAPI', JSON.stringify(result));
        that.chartTotalSales = that.buildchartTarget(result);
        that.salesVsTargetTotal = Math.round(result[0].current);
        loadchart++;

      }, (err) => {
        this.presentToast(err);
      });
      // End chartTarget
      // Draw chart chartLastYear
      that.connectWithAuth('GET', that.getUrl + "Report_SaleVsLastYear_Read_Chart_Detail", { namBatDau: that.financialLastYear.toJSON(), namKetThuc: that.financialDayStart.toJSON(), strLoaiGiaTri: 'HopDong' }, that.token).then((result) => {

        localStorage.setItem('chartLastYearAPI', JSON.stringify(result));
        that.chartLastYear = that.buildchartLastYear(result);
        that.ArraySaleHDLastYear = result.Data_Dau;
        that.ArraySaleHDNow = result.Data_Sau;
        that.SalevsLastYearHD = that.modifySalevsLastYearHD(that.ArraySaleHDNow, that.ArraySaleHDLastYear);
        that.arrayTrendsHD = that.modifySalevsLastYearHD(that.ArraySaleHDNow, that.ArraySaleHDLastYear).arrayTrends;
        that.ArrayFinancialMonth = result.Category_Date;
      }, (err) => {
        this.presentToast(err);
      });
      // End chartLastYear
      // Draw chart chartLastYearRevenue
      that.connectWithAuth('GET', that.getUrl + "Report_SaleVsLastYear_Read_Chart_Detail", { namBatDau: that.financialLastYear.toJSON(), namKetThuc: that.financialDayStart.toJSON(), strLoaiGiaTri: 'DoanhThu' }, that.token).then((result) => {

        localStorage.setItem('chartLastYearRevenueAPI', JSON.stringify(result));
        that.chartLastYearRevenue = that.buildchartLastYearRevenue(result);
        that.ArraySaleDTLastYear = result.Data_Dau;
        that.ArraySaleDTNow = result.Data_Sau;
        that.SalevsLastYearDT = that.modifySalevsLastYearDT(that.ArraySaleDTNow, that.ArraySaleDTLastYear);
        that.arrayTrendsDT = that.modifySalevsLastYearDT(that.ArraySaleDTNow, that.ArraySaleDTLastYear).arrayTrends;
        result.Data_Dau.forEach(element => {
          that.SaleTotalDTLastYear = that.SaleTotalDTLastYear + element;
        });
        that.SaleTotalDTLastYear = Math.round(that.SaleTotalDTLastYear / 1000);
        result.Data_Sau.forEach(element => {

          that.SaleTotalDTNow = that.SaleTotalDTNow + element;

        });
        that.SaleTotalDTNow = Math.round(that.SaleTotalDTNow / 1000);
        // SaleTotalDTLastYear = 0;
        // SaleTotalDTNow = 0
        that.loading.dismiss();

      }, (err) => {
        this.presentToast(err);
      });
      // End chartLastYearRevenue

      //chartService
      that.connectWithAuth('GET', that.getUrl + "Report_SaleByService_Read_Chart", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON() }, that.token).then((result) => {

        // that.chartDealDonutAPI = result;
        localStorage.setItem('chartService', JSON.stringify(result));
        that.chartService = that.buildchartService(result);
        loadchart++;

      }, (err) => {
        this.presentToast(err);
      });
      // End chartService

      //chartRegion
      that.connectWithAuth('GET', that.getUrl + "Report_SaleByClientRegion_Read_Chart", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON(), strLoai: 'DiaDanh' }, that.token).then((result) => {
        // that.chartDealDonutAPI = result;

        localStorage.setItem('chartRegion', JSON.stringify(result));
        that.chartRegion = that.buildchartRegion(result);
        loadchart++;

      }, (err) => {
        this.presentToast(err);
      });
      // End chartRegion
    }, (err) => {
      this.navCtrl.setRoot(LoginPage);
      this.presentToast(err);
    });
    that.loading.dismiss();
  }

}
