import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SourcePage page.
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
  selector: 'page-source',
  templateUrl: 'source.html',
})
export class SourcePage {
  chartSource: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.chartSource = HighCharts.chart('chartSource', {
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
          name: 'Current Client',
          y: 18.27,
          sliced: true,
          selected: true
        }, {
          name: 'Referral',
          y: 16.97
        }, {
          name: 'Consultants',
          y: 4.44
        }, {
          name: 'Our website',
          y: 33.61
        }, {
          name: 'Chưa được phân loại',
          y: 1.17
        }]
      }]
    });
  }

}
