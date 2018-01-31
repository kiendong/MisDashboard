import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as HighCharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(HighCharts);
SolidGauge(HighCharts);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chartDeal: any;
  chartTarget: any;
  chartLastYear: any;
  chartService: any;
  chartRegion: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.chartDeal = HighCharts.chart('container', {
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
        max: 100,
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
          return '<span style="font-size:16px; font-weight: normal">' + this.name + ': ' + total1 + ' d' + '</span>';
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
        }, { // Track for Stand
          outerRadius: '58%',
          innerRadius: '56%',
          backgroundColor: '#E77E2D',
          borderWidth: 0
        }]
      },
      series: [{
        color: '#63CC32',
        name: 'Won',
        data: [{
          radius: '100%',
          innerRadius: '94%',
          y: 80,
          x: 100
        }]
      }, {
        color: '#9A59B5',
        name: 'Lost',
        data: [{
          radius: '80%',
          innerRadius: '74%',
          y: 65,
          x: 195
        }]
      }, {
        color: '#E77E2D',
        name: 'Open',
        data: [{
          radius: '60%',
          innerRadius: '54%',
          y: 50,
          x: 120
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
          return '<span style="font-size:16px; font-weight:normal">' + '39.986.920 K/ 27.000.000 K' + '</span>';

        }
      },
      series: [{
        name: 'Target',
        data: [80],
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