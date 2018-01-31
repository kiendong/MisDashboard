import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chartSales = HighCharts.chart('chartSales', {
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
        name: 'Công ty Điện lực Đồng Tháp ',
        color: '#0CB6B5',
        data: [5964393, 237536, 178800, 3286304, 4603843, 6452665, 972900, 435885, 4395142, 420000, 480000, 490786],
      }, {
        name: 'Tập đoàn Điện lực Việt Nam (EVN)',
        color: '#F1654B',
        data: [237536, 435885, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900, 420000, 435885, 490786]
      }, {
        name: 'Trung tâm CSKH KV miền Nam (EVNSPC.CC)',
        color: '#46B3D2',
        data: [4603843, 6452665, 972900, 435885, 4395142, 6452665, 435885, 420000, 490786, 237536, 3286304, 972900],
      }, {
        name: 'Tổng Công ty Hàng hải Việt nam Vinalines',
        color: '#F78F1E',
        data: [435885, 4395142, 6452665, 435885, 435885, 6452665, 435885, 420000, 490786, 6452665, 972900, 435885]
      }, {
        name: 'FIRST-NASATI PMU',
        color: '#1A764E',
        data: [6452665, 435885, 435885, 6452665, 435885, 178800, 3286304, 4603843, 6452665, 972900, 435885, 420000],
      }]
    });
  }

}
