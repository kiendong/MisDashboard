webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealLossPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DealLossPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var DealLossPage = (function () {
    function DealLossPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DealLossPage.prototype.ionViewDidLoad = function () {
        this.chartReason = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartReason', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
                            name: 'Cancelled by client',
                            y: 4,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Chosen other',
                            y: 9
                        }, {
                            name: 'High price',
                            y: 21
                        }, {
                            name: 'Different expectation',
                            y: 7
                        }, {
                            name: 'Cancelled by OCD',
                            y: 4
                        }]
                }]
        });
    };
    DealLossPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal-loss',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\deal-loss\deal-loss.html"*/'<!--\n  Generated template for the SectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Deal loss reason</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="reason">\n        <ion-row id="reason-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                94 Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Deal loss reason\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="reason-body">\n          <ion-col col-12>\n            <div id="chartReason" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\deal-loss\deal-loss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DealLossPage);
    return DealLossPage;
}());

//# sourceMappingURL=deal-loss.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/**
 * Generated class for the IncomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomingPage = (function () {
    function IncomingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IncomingPage.prototype.ionViewDidLoad = function () {
        this.chartIncoming = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartIncoming', {
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
                backgroundColor: (__WEBPACK_IMPORTED_MODULE_2_highcharts__["theme"] && __WEBPACK_IMPORTED_MODULE_2_highcharts__["theme"].legendBackgroundColor) || '#FFFFFF'
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
    };
    IncomingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incoming',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\incoming\incoming.html"*/'<!--\n  Generated template for the IncomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Total incoming deal</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="incoming">\n        <ion-row id="incoming-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                253\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total incoming deal\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="incoming-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col id="label" col-12 col-sm-6>\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">Xem theo nhân viên BD1</button>\n              </ion-col>\n              <ion-col col-12 col-sm-6 id="button">\n                <button ion-button color="light">Xem theo nhân viên BD2</button>\n              </ion-col>\n\n            </ion-row>\n\n            <div id="chartIncoming" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\incoming\incoming.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IncomingPage);
    return IncomingPage;
}());

//# sourceMappingURL=incoming.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealSourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DealSourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var DealSourcePage = (function () {
    function DealSourcePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DealSourcePage.prototype.ionViewDidLoad = function () {
        this.chartSources = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartSources', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
                            name: 'Direct Sale',
                            y: 0.7
                        }, {
                            name: 'Current Client',
                            y: 12.18
                        }, {
                            name: 'Consultants',
                            y: 2.58
                        }, {
                            name: 'Our website',
                            y: 49.65
                        }, {
                            name: 'Referral',
                            y: 10.07
                        }, {
                            name: 'Web/Email invitation',
                            y: 11.24
                        }, {
                            name: 'Fan page',
                            y: 2.34
                        }]
                }]
        });
    };
    DealSourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal-source',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\deal-source\deal-source.html"*/'<!--\n  Generated template for the DealSourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Deal sources</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sources">\n        <ion-row id="sources-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                427 Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Deal sources\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="sources-body">\n          <ion-col col-12>\n            <ion-row>\n\n              <ion-col col-12 col-sm-12 id="button">\n                <ion-item style="width:300px; float:right;">\n                  <ion-label>Tình trạng</ion-label>\n                  <ion-select [(ngModel)]="status">\n                    <ion-option value="a" selected>Tất cả</ion-option>\n                    <ion-option value="c">Cancelled</ion-option>\n                    <ion-option value="d">Delayed</ion-option>\n                    <ion-option value="l">Lost</ion-option>\n                    <ion-option value="u">Unqualified</ion-option>\n                    <ion-option value="w">Won</ion-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n\n            </ion-row>\n            <div id="chartSources" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\deal-source\deal-source.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DealSourcePage);
    return DealSourcePage;
}());

//# sourceMappingURL=deal-source.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var SectorPage = (function () {
    function SectorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SectorPage.prototype.ionViewDidLoad = function () {
        this.chartSector = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartSector', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
                            name: 'PCDongThap',
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: 'Vinalines',
                            y: 10.38
                        }, {
                            name: 'EVNHN',
                            y: 4.77
                        }, {
                            name: 'BacNinhPC',
                            y: 5
                        }, {
                            name: 'RedSun',
                            y: 18
                        }, {
                            name: 'PCLongAn',
                            y: 0.5
                        }, {
                            name: 'VETC',
                            y: 2
                        }]
                }]
        });
    };
    SectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sector',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\sector\sector.html"*/'<!--\n  Generated template for the SectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Sales by client sector</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sector">\n        <ion-row id="sector-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                39.986.920,13 K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by client sector\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="sector-body">\n          <ion-col col-12>\n            <div id="chartSector" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\sector\sector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SectorPage);
    return SectorPage;
}());

//# sourceMappingURL=sector.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var SourcePage = (function () {
    function SourcePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SourcePage.prototype.ionViewDidLoad = function () {
        this.chartSource = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartSource', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    SourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-source',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\source\source.html"*/'<!--\n  Generated template for the sourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Sales by source</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="source">\n        <ion-row id="source-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                39.986.920,13 K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by source\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="source-body">\n          <ion-col col-12>\n            <div id="chartSource" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\source\source.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SourcePage);
    return SourcePage;
}());

//# sourceMappingURL=source.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/**
 * Generated class for the TotalSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalSalesPage = (function () {
    function TotalSalesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TotalSalesPage.prototype.ionViewDidLoad = function () {
        this.chartSales = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartSales', {
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
                backgroundColor: (__WEBPACK_IMPORTED_MODULE_2_highcharts__["theme"] && __WEBPACK_IMPORTED_MODULE_2_highcharts__["theme"].legendBackgroundColor) || '#FFFFFF'
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
    };
    TotalSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total-sales',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\total-sales\total-sales.html"*/'<!--\n  Generated template for the IncomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Total sales</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sales">\n        <ion-row id="sales-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                39.986.920,13 K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total sales\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="sales-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col style="text-align:left;">\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                  <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                  Khách hàng\n                </button>\n              </ion-col>\n\n            </ion-row>\n\n            <div id="chartSales" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\total-sales\total-sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TotalSalesPage);
    return TotalSalesPage;
}());

//# sourceMappingURL=total-sales.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deal-loss/deal-loss.module": [
		281,
		5
	],
	"../pages/deal-source/deal-source.module": [
		283,
		4
	],
	"../pages/incoming/incoming.module": [
		282,
		3
	],
	"../pages/sector/sector.module": [
		284,
		2
	],
	"../pages/source/source.module": [
		285,
		1
	],
	"../pages/total-sales/total-sales.module": [
		286,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
__WEBPACK_IMPORTED_MODULE_4_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.chartDeal = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('container', {
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
                    for (var i = this.yData.length; i--;) {
                        total += this.yData[i];
                        total1 += this.xData[i];
                    }
                    ;
                    //return '<span style="font-size:12px;">' + this.name + ': ' + total + '% - ' + total1 + '</span>';
                    return '<span style="font-size:16px; font-weight: normal">' + this.name + ': ' + total1 + ' d' + '</span>';
                }
            },
            pane: {
                startAngle: 0,
                endAngle: 360,
                background: [{
                        outerRadius: '98%',
                        innerRadius: '96%',
                        backgroundColor: '#63CC32',
                        borderWidth: 0,
                        dashStyle: 'longdashdot'
                    }, {
                        outerRadius: '78%',
                        innerRadius: '76%',
                        backgroundColor: '#9A59B5',
                        dashStyle: 'shortdot',
                        borderWidth: 0
                    }, {
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
        this.chartTarget = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartTarget', {
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
                startAngle: -120,
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
                    for (var i = this.yData.length; i--;) {
                        total += this.yData[i];
                    }
                    ;
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
        this.chartLastYear = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartLastYear', {
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
        this.chartService = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartService', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
        this.chartRegion = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('chartRegion', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_2_highcharts__["numberFormat"](this.point.y, 2, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Dashboard</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="dashboard">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-6 id="deal">\n        <ion-row id="deal-header">\n          <ion-col col-2 id="icon-1">\n            <ion-icon name="md-pricetags"></ion-icon>\n          </ion-col>\n          <ion-col col-8 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                427 Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total number of Deals (d)\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="deal-body">\n          <ion-col col-12 col-sm-12>\n            <div id="container" style="display: block;"></div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-12 col-sm-6 id="target">\n        <ion-row id="target-header">\n          <ion-col col-2 id="icon-1">\n            <ion-icon name="ios-locate-outline"></ion-icon>\n          </ion-col>\n          <ion-col col-8 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                80 %\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale vs target\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="target-body">\n          <ion-col col-12 col-sm-12>\n            <div id="chartTarget" style="display: block;"></div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-12 col-sm-12 id="last-year">\n        <ion-row id="last-year-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                39.986 T/ 33.996 T\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale vs last year\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="last-year-body">\n          <ion-col col-12 col-sm-10 col-lg-10 col-xl-11>\n            <!-- <ion-row>\n              <ion-col id="label" col-12 col-sm-6>\n                <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                  Xem theo giá trị hợp đồng\n                </button>\n              </ion-col>\n              <ion-col col-12 col-sm-6 id="button">\n                <button ion-button color="light">Xem theo tổng doanh thu</button>\n              </ion-col>\n\n            </ion-row> -->\n\n            <div id="chartLastYear" style="display: block;"></div>\n          </ion-col>\n          <ion-col col-12 col-sm-2 col-lg-2 col-xl-1>\n            <ion-row id="legend-header">\n              <ion-row id="legend">\n                <ion-col col-12 style=" text-align:center;">\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 30% </ion-icon> - 12T\n                </ion-col>\n\n              </ion-row>\n            </ion-row>\n            <ion-row id="legend-body">\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 30% </ion-icon> - T04\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 20% </ion-icon> - T05\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-down" style="color : red;"> 50% </ion-icon> - T06\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 30% </ion-icon> - T07\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 20% </ion-icon> - T08\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 30% </ion-icon> - T09\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 20% </ion-icon> - T10\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-down" style="color : red;"> 50% </ion-icon> - T11\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 30% </ion-icon> - T12\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-up" style="color : green;"> 20% </ion-icon> - T01\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-down" style="color : red;"> 50% </ion-icon> - T02\n                </ion-col>\n              </ion-row>\n              <ion-row id="legend">\n                <ion-col col-12>\n                  <ion-icon name="md-arrow-round-down" style="color : red;"> 50% </ion-icon> - T03\n                </ion-col>\n              </ion-row>\n\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-12 col-sm-6 id="service">\n        <ion-row id="service-header">\n          <ion-col col-2 id="icon-1">\n            <i class="fa fa-pie-chart"></i>\n          </ion-col>\n          <ion-col col-8 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                427 Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by service\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="service-body">\n          <ion-col col-12 col-sm-12>\n            <div id="chartService" style="display: block;"></div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col col-12 col-sm-6 id="region">\n        <ion-row id="region-header">\n          <ion-col col-2 id="icon-1">\n            <i class="fa fa-pie-chart"></i>\n          </ion-col>\n          <ion-col col-8 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                427 Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by client region\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="region-body">\n          <ion-col col-12 col-sm-12>\n            <div id="chartRegion" style="display: block;"></div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_incoming_incoming__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_total_sales_total_sales__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sector_sector__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_source_source__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deal_source_deal_source__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_incoming_incoming__["a" /* IncomingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_total_sales_total_sales__["a" /* TotalSalesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sector_sector__["a" /* SectorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_source_source__["a" /* SourcePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_deal_source_deal_source__["a" /* DealSourcePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__["a" /* DealLossPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deal-loss/deal-loss.module#DealLossPageModule', name: 'DealLossPage', segment: 'deal-loss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incoming/incoming.module#IncomingPageModule', name: 'IncomingPage', segment: 'incoming', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal-source/deal-source.module#DealSourcePageModule', name: 'DealSourcePage', segment: 'deal-source', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sector/sector.module#SectorPageModule', name: 'SectorPage', segment: 'sector', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/source/source.module#SourcePageModule', name: 'SourcePage', segment: 'source', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total-sales/total-sales.module#TotalSalesPageModule', name: 'TotalSalesPage', segment: 'total-sales', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_incoming_incoming__["a" /* IncomingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_total_sales_total_sales__["a" /* TotalSalesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sector_sector__["a" /* SectorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_source_source__["a" /* SourcePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_deal_source_deal_source__["a" /* DealSourcePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__["a" /* DealLossPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incoming_incoming__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_total_sales_total_sales__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sector_sector__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_source_source__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_deal_source_deal_source__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deal_loss_deal_loss__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Total incoming deal', component: __WEBPACK_IMPORTED_MODULE_6__pages_incoming_incoming__["a" /* IncomingPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
        this.pages2 = {
            listPage: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            homePage: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            incomingPage: __WEBPACK_IMPORTED_MODULE_6__pages_incoming_incoming__["a" /* IncomingPage */],
            totalSalesPage: __WEBPACK_IMPORTED_MODULE_7__pages_total_sales_total_sales__["a" /* TotalSalesPage */],
            sectorPage: __WEBPACK_IMPORTED_MODULE_8__pages_sector_sector__["a" /* SectorPage */],
            sourcePage: __WEBPACK_IMPORTED_MODULE_9__pages_source_source__["a" /* SourcePage */],
            dealSourcePage: __WEBPACK_IMPORTED_MODULE_10__pages_deal_source_deal_source__["a" /* DealSourcePage */],
            dealLossPage: __WEBPACK_IMPORTED_MODULE_11__pages_deal_loss_deal_loss__["a" /* DealLossPage */]
        };
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\Realease\HighChartsIonic\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <ion-row>\n          <ion-col col-5>\n            <img style="width:100px;height:100px; border-radius:50%;" src="assets/imgs/OCD0009.jpg">\n          </ion-col>\n          <ion-col col-7 style="font-size:18px">\n            Tăng Văn Khánh\n            <br> khanhtv@ocd.vn\n            <br>\n            <br>\n            <a href="#"> Đăng Xuất</a>\n          </ion-col>\n        </ion-row>\n\n\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.homePage)">\n\n        <div>\n          <i class="fa fa-tachometer fa-2x" style="color:#2D2B76" aria-hidden="true"></i>\n          Dashboard\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.incomingPage)">\n        <div>\n          <i class="fa fa-area-chart fa-2x" style="color:#3498DB"></i>\n          Total incoming deal\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.totalSalesPage)">\n        <div>\n          <i class="fa fa-area-chart fa-2x" style="color:#62CB31"></i>\n          Total Sales\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.sectorPage)">\n        <div>\n          <i class="fa fa-pie-chart fa-2x" style="color:#E67E22"></i>\n          Sale by client sector\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.sourcePage)">\n        <div>\n          <i class="fa fa-pie-chart fa-2x" style="color:#9B59B6"></i>\n          Sale by source\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.dealSourcePage)">\n        <div>\n          <i class="fa fa-pie-chart fa-2x" style="color:#3498DB"></i>\n          Deal source\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.dealLossPage)">\n        <div>\n          <i class="fa fa-pie-chart fa-2x" style="color:#3C9291"></i>\n          Deal loss reason\n        </div>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Ionic\Realease\HighChartsIonic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map