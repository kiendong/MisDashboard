import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chartIncoming = HighCharts.chart('chartIncoming', {
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
        valueSuffix: ' '
      },
      credits: {
        enabled: false
      },
      plotOptions: {
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

      series: [{
        name: 'Đỗ Thị Hiên',
        color: '#0CB6B5',
        data: [7, 9, 7, 1, 0, 0, 1, 7, 0, 4, 1, 0],
      }, {
        name: 'Hoàng Thanh Hương',
        color: '#F1654B',
        data: [5, 2, 0, 0, 1, 0, 1, 0, 5, 0, 2, 0]
      }, {
        name: 'Hoàng Thị Thúy Nga',
        color: '#46B3D2',
        data: [6, 8, 8, 3, 4, 10, 5, 8, 3, 7, 4, 0]
      }, {
        name: 'Phan Thị Ngọc Cẩm',
        color: '#F78F1E',
        data: [4, 2, 3, 3, 0, 0, 1, 2, 1, 0, 4, 0],
      }, {
        name: 'Tăng Văn Khánh',
        color: '#1A764E',
        data: [14, 22, 8, 11, 13, 12, 13, 14, 18, 11, 13, 0]
      }]
    });
    this.chartIncoming = HighCharts.chart('chartIncomingBD2', {
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
        valueSuffix: ' '
      },
      credits: {
        enabled: false
      },
      plotOptions: {
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

      series: [{
        name: 'Đỗ Thị Hiên',
        color: '#0CB6B5',
        data: [7, 9, 7, 1, 0, 0, 1, 7, 0, 4, 1, 0],
      }, {
        name: 'Hoàng Thanh Hương',
        color: '#F1654B',
        data: [5, 2, 0, 0, 1, 0, 1, 0, 5, 0, 2, 0]
      }, {
        name: 'Hoàng Thị Thúy Nga',
        color: '#46B3D2',
        data: [6, 8, 8, 3, 4, 10, 5, 8, 3, 7, 4, 0]
      }, {
        name: 'Phan Thị Ngọc Cẩm',
        color: '#F78F1E',
        data: [4, 2, 3, 3, 0, 0, 1, 2, 1, 0, 4, 0],
      }, {
        name: 'Tăng Văn Khánh',
        color: '#1A764E',
        data: [14, 22, 8, 11, 13, 12, 13, 14, 18, 11, 13, 0]
      }]
    });
  }

}
