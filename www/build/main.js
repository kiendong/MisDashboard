webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { RegisterPage } from '../register/register';
var LoginPage = (function () {
    function LoginPage(navCtrl, authService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.loginData = { username: '', password: '' };
    }
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.authService.login(this.loginData).then(function (result) {
            // this.loading.dismiss();
            _this.data = result;
            localStorage.setItem('token', JSON.stringify(_this.data));
            var token = JSON.parse(localStorage.getItem("token")).access_token;
            var that = _this;
            _this.authService.loadUser(token).then(function (data) {
                localStorage.setItem('userStorage', JSON.stringify(data));
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]);
                // load xong hết mới tắt loading
                _this.loading.dismiss();
            });
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    //register() {
    //  this.navCtrl.push(RegisterPage);
    //}
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\login\login.html"*/'<ion-content padding style="color:white; text-align:center; background-image: url(\'assets/imgs/login.jpg\');">\n\n  <h2>Welcome to OCD </h2>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2>\n\n\n\n      </ion-col>\n\n      <ion-col col-8>\n\n        <form (submit)="doLogin()" style="border-radius:5px;">\n\n          <ion-item style="background:none !important;">\n\n            <ion-label style=" font-size: 20px; color:white" stacked>Username</ion-label>\n\n            <ion-input style=" font-size: 20px; color:white" [(ngModel)]="loginData.username" name="username" type="text" required></ion-input>\n\n          </ion-item>\n\n          <ion-item style="background:none !important;">\n\n            <ion-label style=" font-size: 20px; color:white" stacked>Password</ion-label>\n\n            <ion-input style=" font-size: 20px; color:white" [(ngModel)]="loginData.password" name="password" type="password" required></ion-input>\n\n          </ion-item>\n\n          <button ion-button style="background-color:#32DB64;" type="submit">\n\n            Login\n\n          </button>\n\n        </form>\n\n      </ion-col>\n\n      <ion-col col-2>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealLossPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//API



/**
 * Generated class for the DealLossPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
var DealLossPage = (function () {
    function DealLossPage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.totalDealLoss = 0;
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    DealLossPage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    DealLossPage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    DealLossPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    DealLossPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DealLossPage.prototype.buildchartReason = function (data) {
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round(element.SoLuong * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"]('chartReason', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_5_highcharts__["numberFormat"](this.point.y, 0, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    DealLossPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chartSector
            that.connectWithAuth('GET', that.getUrl + "Report_DealLossReason_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON() }, that.token).then(function (result) {
                // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartReason = that.buildchartReason(result);
                result.forEach(function (element) {
                    that.totalDealLoss = that.totalDealLoss + element.SoLuong;
                });
                that.totalDealLoss = Math.round(that.totalDealLoss * 100) / 100;
                that.ArrayFinancialMonth = result.Category_Date;
                that.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
            });
            // End chartSector
        }, function (err) {
            _this.presentToast(err);
        });
    };
    DealLossPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal-loss',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\deal-loss\deal-loss.html"*/'<!--\n  Generated template for the SectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Deal loss reason</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="reason">\n        <ion-row id="reason-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalDealLoss}} Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Deal loss reason\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="reason-body">\n          <ion-col col-12>\n            <div id="chartReason" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\deal-loss\deal-loss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], DealLossPage);
    return DealLossPage;
}());

//# sourceMappingURL=deal-loss.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
//API



/**
 * Generated class for the IncomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomingPage = (function () {
    function IncomingPage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.totalDealBD1 = 0;
        this.totalDealBD2 = 0;
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    IncomingPage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    IncomingPage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    IncomingPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    IncomingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    IncomingPage.prototype.buildchartIncoming = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('chartIncoming', {
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
                backgroundColor: (__WEBPACK_IMPORTED_MODULE_3_highcharts__["theme"] && __WEBPACK_IMPORTED_MODULE_3_highcharts__["theme"].legendBackgroundColor) || '#FFFFFF'
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
                    this.points.forEach(function (element) {
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
    };
    IncomingPage.prototype.buildchartIncomingBD2 = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('chartIncomingBD2', {
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
                backgroundColor: (__WEBPACK_IMPORTED_MODULE_3_highcharts__["theme"] && __WEBPACK_IMPORTED_MODULE_3_highcharts__["theme"].legendBackgroundColor) || '#FFFFFF'
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
                    this.points.forEach(function (element) {
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
    };
    IncomingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chart Incoming BD1
            that.connectWithAuth('GET', that.getUrl + "Report_TotalDealIncoming_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1' }, that.token).then(function (result) {
                localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartIncoming = that.buildchartIncoming(result);
                that.ArrayFinancialMonth = result.Category_Date;
                result.forEach(function (element) {
                    element.data.forEach(function (elm) {
                        that.totalDealBD1 = that.totalDealBD1 + elm;
                    });
                });
                that.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
            });
            // End Incoming BD1
            // Draw chart Incoming BD2
            that.connectWithAuth('GET', that.getUrl + "Report_TotalDealIncoming_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD2' }, that.token).then(function (result) {
                localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartIncomingBD2 = that.buildchartIncomingBD2(result);
                that.ArrayFinancialMonth = result.Category_Date;
                result.forEach(function (element) {
                    element.data.forEach(function (elm) {
                        that.totalDealBD2 = that.totalDealBD2 + elm;
                    });
                });
            }, function (err) {
                _this.presentToast(err);
            });
            // End Incoming BD2
        }, function (err) {
            _this.presentToast(err);
        });
    };
    IncomingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-incoming',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\incoming\incoming.html"*/'<!--\n  Generated template for the IncomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Total incoming deal</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="incoming">\n        <ion-row id="incoming-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalDealBD1}} deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total incoming deals\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="incoming-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col id="label" col-12 col-sm-6>\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">Nhân viên BD1</button>\n              </ion-col>\n              <!-- <ion-col col-12 col-sm-6 id="button">\n                <button ion-button color="light">Xem theo nhân viên BD2</button>\n              </ion-col> -->\n\n            </ion-row>\n\n            <div id="chartIncoming" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="incomingBD2">\n        <ion-row id="incomingBD2-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalDealBD2}} deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total incoming deals\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="incomingBD2-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col id="label" col-12 col-sm-6>\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                  <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">Nhân viên BD2</button>\n              </ion-col>\n              <!-- <ion-col col-12 col-sm-6 id="button">\n                  <button ion-button color="light">Xem theo nhân viên BD2</button>\n                </ion-col> -->\n\n            </ion-row>\n\n            <div id="chartIncomingBD2" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\incoming\incoming.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], IncomingPage);
    return IncomingPage;
}());

//# sourceMappingURL=incoming.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealSourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//API



/**
 * Generated class for the DealSourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
var DealSourcePage = (function () {
    function DealSourcePage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.TinhTrangClosure = [];
        this.totalDealsource = 0;
        this.statusSelect = 0;
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    DealSourcePage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    DealSourcePage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    DealSourcePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    DealSourcePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    DealSourcePage.prototype.buildchartSources = function (data) {
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round(element.SoLuong * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"]('chartSources', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_5_highcharts__["numberFormat"](this.point.y, 0, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    DealSourcePage.prototype.loadChartCall = function (tinhtrang) {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chartSector
            that.connectWithAuth('GET', that.getUrl + "Report_DealSource_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), IDTinhTrang: tinhtrang }, that.token).then(function (result) {
                // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartSources = that.buildchartSources(result);
                result.forEach(function (element) {
                    that.totalDealsource = that.totalDealsource + element.SoLuong;
                });
                that.totalDealsource = Math.round(that.totalDealsource * 100) / 100;
                that.ArrayFinancialMonth = result.Category_Date;
                that.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
            });
            // End chartSector
        }, function (err) {
            _this.presentToast(err);
        });
    };
    DealSourcePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        this.loadChartCall(0);
        // TinhTrangClosure
        that.connectWithAuth('GET', that.getUrl + "TinhTrangClosure", {}, that.token).then(function (result) {
            // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
            that.TinhTrangClosure = result;
            that.loading.dismiss();
        }, function (err) {
            _this.presentToast(err);
        });
        // End TinhTrangClosure
    };
    DealSourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deal-source',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\deal-source\deal-source.html"*/'<!--\n  Generated template for the DealSourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Deal sources</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sources">\n        <ion-row id="sources-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalDealsource}} Deals\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Deal sources\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="sources-body">\n          <ion-col col-12>\n            <ion-row>\n\n              <ion-col col-12 col-sm-12 id="button">\n                <ion-item style="width:300px; float:right;">\n                  <ion-label>Tình trạng</ion-label>\n                  <ion-select #C (ionChange)="this.loadChartCall(C.value)">\n                    <ion-option value="0" selected>Tất cả</ion-option>\n                    <ng-container *ngFor="let tinhtrang of TinhTrangClosure">\n\n                      <ion-option value="{{tinhtrang.ID}}">{{tinhtrang.Ten}}</ion-option>\n                    </ng-container>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n\n            </ion-row>\n            <div id="chartSources" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\deal-source\deal-source.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], DealSourcePage);
    return DealSourcePage;
}());

//# sourceMappingURL=deal-source.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//API



/**
 * Generated class for the SectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
var SectorPage = (function () {
    function SectorPage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.totalSector = 0;
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    SectorPage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    SectorPage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    SectorPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    SectorPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SectorPage.prototype.buildchartSector = function (data) {
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round((element.SoLuong / 1000) * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"]('chartSector', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_5_highcharts__["numberFormat"](this.point.y, 0, ',', '.') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    SectorPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chartSector
            that.connectWithAuth('GET', that.getUrl + "Report_SaleByClientSector_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON() }, that.token).then(function (result) {
                // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartSector = that.buildchartSector(result);
                that.ArrayFinancialMonth = result.Category_Date;
                result.forEach(function (element) {
                    that.totalSector = that.totalSector + element.SoLuong;
                });
                that.totalSector = Math.round((that.totalSector) * 100) / 100;
                that.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
            });
            // End chartSector
        }, function (err) {
            _this.presentToast(err);
        });
    };
    SectorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sector',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\sector\sector.html"*/'<!--\n  Generated template for the SectorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Sales by client sector</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sector">\n        <ion-row id="sector-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n               {{totalSector.toLocaleString()}} K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by client sector\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="sector-body">\n          <ion-col col-12>\n            <div id="chartSector" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\sector\sector.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SectorPage);
    return SectorPage;
}());

//# sourceMappingURL=sector.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//API



/**
 * Generated class for the SourcePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
var SourcePage = (function () {
    function SourcePage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.totalSector = 0;
        //check login and back to login pages
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    SourcePage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    SourcePage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    SourcePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    SourcePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SourcePage.prototype.buildchartSource = function (data) {
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round((element.SoLuong / 1000) * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_5_highcharts__["chart"]('chartSource', {
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
                formatter: function () {
                    //if (this.point.y != 0) {
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_5_highcharts__["numberFormat"](this.point.y, 0, ',', '.') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
                    // }
                }
            },
            legend: {
                labelFormatter: function () {
                    // Lấy cả số liệu của y và x data
                    //if (this.point.y != 0) {
                    return '<span style="font-size:16px; font-weight: normal">' + this.name + '</span>';
                    //}
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
    };
    SourcePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chartSector
            that.connectWithAuth('GET', that.getUrl + "Report_SaleBySource_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON() }, that.token).then(function (result) {
                // localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartSource = that.buildchartSource(result);
                result.forEach(function (element) {
                    that.totalSector = that.totalSector + element.SoLuong;
                });
                that.totalSector = Math.round((that.totalSector) * 100) / 100;
                that.ArrayFinancialMonth = result.Category_Date;
                that.loading.dismiss();
            }, function (err) {
                _this.presentToast(err);
            });
            // End chartSector
        }, function (err) {
            _this.presentToast(err);
        });
    };
    SourcePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-source',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\source\source.html"*/'<!--\n  Generated template for the sourcePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Sales by source</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="source">\n        <ion-row id="source-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalSector.toLocaleString()}} K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Sale by source\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n        <ion-row id="source-body">\n          <ion-col col-12>\n            <div id="chartSource" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\source\source.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SourcePage);
    return SourcePage;
}());

//# sourceMappingURL=source.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = (function () {
    function SettingPage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.chartPositions = {};
    }
    SettingPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SettingPage.prototype.setChartPosition = function (chartPositions) {
        if (chartPositions.chartTarget < 1 || chartPositions.chartTarget > 7 ||
            chartPositions.chartDealDonut < 1 || chartPositions.chartDealDonut > 7 ||
            chartPositions.chartTotalSales < 1 || chartPositions.chartTotalSales > 7 ||
            chartPositions.chartLastYear < 1 || chartPositions.chartLastYear > 7 ||
            chartPositions.chartLastYearRevenue < 1 || chartPositions.chartLastYearRevenue > 7 ||
            chartPositions.chartService < 1 || chartPositions.chartService > 7 ||
            chartPositions.chartRegion < 1 || chartPositions.chartRegion > 7) {
            this.presentToast('Error: number input form 1 to 7');
        }
        else {
            localStorage.setItem('chartPositions', JSON.stringify(this.chartPositions));
            this.presentToast('Success!');
        }
    };
    SettingPage.prototype.ionViewDidLoad = function () {
        if (localStorage.getItem("chartPositions")) {
            this.chartPositions = JSON.parse(localStorage.getItem("chartPositions"));
        }
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\setting\setting.html"*/'<!--\n  Generated template for the SettingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Setting</ion-title> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sector">\n        <ion-row id="sector-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                Setting\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Change chart positions\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-1 id="icon-2">\n            <!-- <ion-icon name="md-sync"></ion-icon> -->\n          </ion-col>\n          <ion-col col-1 id="icon-3">\n            <!-- <ion-icon name="ios-arrow-down"></ion-icon> -->\n          </ion-col>\n        </ion-row>\n\n        <form (submit)="setChartPosition(chartPositions)">\n          <!-- <form (submit)="doLogin()" style="border-radius:5px;"> -->\n          <ion-item>\n            <div clear item-left>\n              Sales vs target\n            </div>\n            <ion-input [(ngModel)]="chartPositions.chartTarget" min="1" max="7" type="number" placeholder="Position" name="chartTarget"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> Deals Total</div>\n            <ion-input [(ngModel)]="chartPositions.chartDealDonut" name="chartDealDonut" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> Total sales</div>\n            <ion-input [(ngModel)]="chartPositions.chartTotalSales" name="chartTotalSales" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> Sales vs last year </div>\n            <ion-input [(ngModel)]="chartPositions.chartLastYear" name="chartLastYear" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> revenues vs last year </div>\n            <ion-input [(ngModel)]="chartPositions.chartLastYearRevenue" name="chartLastYearRevenue" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> Sales by service </div>\n            <ion-input [(ngModel)]="chartPositions.chartService" name="chartService" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <ion-item>\n            <div clear item-left> Sales by client region </div>\n            <ion-input [(ngModel)]="chartPositions.chartRegion" name="chartRegion" min="1" max="7" type="number" placeholder="Position"></ion-input>\n          </ion-item>\n          <button ion-button style="background-color:#32DB64; margin-left:50%;margin-top:20px" type="submit">\n            Save\n          </button>\n        </form>\n\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalSalesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






__WEBPACK_IMPORTED_MODULE_4_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
__WEBPACK_IMPORTED_MODULE_5_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_3_highcharts__);
//API



/**
 * Generated class for the TotalSalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TotalSalesPage = (function () {
    function TotalSalesPage(navCtrl, navParams, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.ngayBatDau = new Date('2017/03/31');
        this.ngayKetThuc = new Date('2018/02/05');
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.totalSale1 = 0;
        this.totalSale2 = 0;
        this.totalSale3 = 0;
        this.totalSale4 = 0;
        //check login and back to login pages
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            this.RefeshToken(tokenObject).then(function (result) {
            }, function (err) {
                _this.loading.dismiss();
                _this.presentToast(err);
            });
        }
    }
    TotalSalesPage.prototype.RefeshToken = function (TokenObject) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.authService.refeshToken(TokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
            }, function (err) {
                _this.presentToast(err);
            });
        });
    };
    // API Call function
    TotalSalesPage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    TotalSalesPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    TotalSalesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TotalSalesPage.prototype.buildchartSales = function (data) {
        // debugger;
        return __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('chartSales', {
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
                    this.points.forEach(function (element) {
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
    };
    TotalSalesPage.prototype.buildchartSalesBD1DT = function (data) {
        return __WEBPACK_IMPORTED_MODULE_3_highcharts__["chart"]('chartSalesBD1DT', {
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
                    this.points.forEach(function (element) {
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
    };
    TotalSalesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        that.showLoader();
        // get financial year
        that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
            that.financialYear = new Date(result.ApDungTuNgay);
            that.financialDayStart = new Date(result.Tu);
            that.financialDayEnd = new Date(result.Den);
            // create financial last year.
            that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
            that.strFinancialYear = _this.financialYear.getFullYear();
            // Draw chart totalsale BD1 HD
            that.connectWithAuth('GET', that.getUrl + "Report_TotalSale_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1', strLoaiGiaTri: 'HopDong' }, that.token).then(function (result) {
                localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartSales = that.buildchartSales(result);
                that.ArrayFinancialMonth = result.Category_Date;
                result.forEach(function (element) {
                    (element.data).forEach(function (elm) {
                        that.totalSale1 = that.totalSale1 + elm;
                    });
                });
                that.totalSale1 = Math.round(that.totalSale1 * 100) / 100;
            }, function (err) {
                _this.presentToast(err);
            });
            // End totalsale BD2 HD
            // Draw chart totalsale BD1 DT
            that.connectWithAuth('GET', that.getUrl + "Report_TotalSale_Read_Chart", { ngayBatDau: that.financialDayStart.toJSON(), ngayKetThuc: that.financialDayEnd.toJSON(), strBD: 'BD1', strLoaiGiaTri: 'DoanhThu' }, that.token).then(function (result) {
                localStorage.setItem('chartIncomingAPI', JSON.stringify(result));
                that.chartSalesBD1DT = that.buildchartSalesBD1DT(result);
                that.ArrayFinancialMonth = result.Category_Date;
                result.forEach(function (element) {
                    element.data.forEach(function (elm) {
                        that.totalSale3 = that.totalSale3 + elm;
                    });
                });
                that.totalSale3 = Math.round(that.totalSale3 * 100) / 100;
            }, function (err) {
                _this.presentToast(err);
            });
            // End totalsale BD1 DT
            that.loading.dismiss();
        }, function (err) {
            _this.presentToast(err);
        });
    };
    TotalSalesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-total-sales',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\total-sales\total-sales.html"*/'<!--\n  Generated template for the IncomingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Total sales</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding id="page">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 id="sales">\n        <ion-row id="sales-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalSale1.toLocaleString()}} K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Total sales (HD) - Khách hàng\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row id="sales-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col style="text-align:left;">\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                  <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <!-- <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                  Tổng giá trị hợp đồng - Nhân viên BD1\n                </button> -->\n              </ion-col>\n\n            </ion-row>\n\n            <div id="chartSales" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 id="salesBD1DT">\n        <ion-row id="salesBD1DT-header">\n          <ion-col col-2 col-sm-1 id="icon-1">\n            <i class="fa fa-area-chart"></i>\n          </ion-col>\n          <ion-col col-8 col-sm-9 id="title">\n            <ion-row>\n              <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                {{totalSale3.toLocaleString()}} K\n              </ion-col>\n              <ion-col col-12 style="color:white; font-size: 18px;">\n                Revenues (DT) - Khách hàng\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row id="salesBD1DT-body">\n          <ion-col col-12>\n            <ion-row>\n              <ion-col style="text-align:left;">\n                <!-- <button ion-button style="background-color:white;color:black;">40.000.000,00</button>\n                      <button ion-button style="background-color:white;color:black">56.000.000,00</button> -->\n                <!-- <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                  Tổng doanh thu - Nhân viên BD1\n                </button> -->\n              </ion-col>\n\n            </ion-row>\n\n            <div id="chartSalesBD1DT" style="display: block;"></div>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\total-sales\total-sales.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], TotalSalesPage);
    return TotalSalesPage;
}());

//# sourceMappingURL=total-sales.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deal-loss/deal-loss.module": [
		294,
		6
	],
	"../pages/deal-source/deal-source.module": [
		296,
		5
	],
	"../pages/incoming/incoming.module": [
		295,
		4
	],
	"../pages/sector/sector.module": [
		297,
		3
	],
	"../pages/setting/setting.module": [
		299,
		2
	],
	"../pages/source/source.module": [
		298,
		1
	],
	"../pages/total-sales/total-sales.module": [
		300,
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://id.ocd.vn/';
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Authorization', 'Basic ' + 'bW9iaWxlOm1vYmlsZW1pc29jZA==');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            params.set('grant_type', 'password');
            params.set('username', credentials.username);
            params.set('password', credentials.password);
            params.set('scope', 'openid profile roles publicApi mail email all_claims offline_access');
            _this.http.post(apiUrl + "identity/connect/token", params, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.refeshToken = function (refeshToken) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Authorization', 'Basic ' + 'bW9iaWxlOm1vYmlsZW1pc29jZA==');
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
            params.set('grant_type', 'refresh_token');
            params.set('refresh_token', refeshToken);
            _this.http.post(apiUrl + "identity/connect/token", params, options)
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.loadUser = function (token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json;charset=utf-8');
        headers.append("Data-type", "json");
        headers.append('Authorization', 'Bearer ' + token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // don't have the data yet
        return new Promise(function (resolve, reject) {
            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            _this.http.get(apiUrl + 'identity/connect/userinfo', options)
                .subscribe(function (data) {
                console.log("loadUser");
                // we've got back the raw data, now generate the core schedule data
                // and save the data for later reference
                resolve(data.json());
                //debugger;
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'guest/signup', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthService.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            localStorage.clear();
            resolve(true);
        });
    };
    AuthService.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_incoming_incoming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_total_sales_total_sales__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_sector_sector__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_source_source__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_deal_source_deal_source__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_deal_loss_deal_loss__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// login



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, authService, loadingCtrl, toastCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.isLoggedIn = false;
        this.userStorage = {
            sub: 'OCD',
            email: 'ocd@ocd.vn',
            profile: 'assets/imgs/logo.png'
        };
        if (localStorage.getItem("userStorage")) {
            this.userStorage = JSON.parse(localStorage.getItem("userStorage"));
        }
        else {
            this.userStorage = {
                sub: 'OCD',
                email: 'ocd@ocd.vn',
                profile: 'assets/imgs/logo.png'
            };
        }
        this.initializeApp();
        // used for an example of ngFor and navigation
        // this.pages = [
        //   { title: 'Home', component: HomePage },
        //   { title: 'Total incoming deal', component: IncomingPage },
        //   { title: 'List', component: ListPage }
        // ];
        this.pages2 = {
            listPage: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            homePage: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            incomingPage: __WEBPACK_IMPORTED_MODULE_6__pages_incoming_incoming__["a" /* IncomingPage */],
            totalSalesPage: __WEBPACK_IMPORTED_MODULE_7__pages_total_sales_total_sales__["a" /* TotalSalesPage */],
            sectorPage: __WEBPACK_IMPORTED_MODULE_8__pages_sector_sector__["a" /* SectorPage */],
            sourcePage: __WEBPACK_IMPORTED_MODULE_9__pages_source_source__["a" /* SourcePage */],
            dealSourcePage: __WEBPACK_IMPORTED_MODULE_10__pages_deal_source_deal_source__["a" /* DealSourcePage */],
            dealLossPage: __WEBPACK_IMPORTED_MODULE_11__pages_deal_loss_deal_loss__["a" /* DealLossPage */],
            settingPage: __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */]
        };
    }
    MyApp.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (result) {
            _this.loadingCtrl.create();
            var nav = _this.app.getRootNav();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.loadingCtrl.create();
            _this.presentToast(err);
        });
    };
    MyApp.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    MyApp.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
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
        if (localStorage.getItem("userStorage")) {
            this.userStorage = JSON.parse(localStorage.getItem("userStorage"));
        }
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>\n        <ion-row>\n          <ion-col col-5 *ngIf="userStorage.profile !=\'assets/imgs/logo.png\'">\n            <img style="width:100px;height:100px; border-radius:50%;" src="http://hrm.ocd.vn/uploads/avatar/{{userStorage.profile}}.jpg">\n          </ion-col>\n          <ion-col col-5 *ngIf="userStorage.profile ==\'assets/imgs/logo.png\'">\n            <img style="width:100px;height:100px; border-radius:50%;" src="assets/imgs/logo.png">\n          </ion-col>\n          <ion-col col-7 style="font-size:18px">\n            {{userStorage.sub}}\n            <br> {{userStorage.email}}\n            <br>\n            <br>\n            <a href="#" (click)="logout()"> Đăng xuất</a>\n          </ion-col>\n        </ion-row>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.homePage)">\n\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-tachometer fa-2x" style="color:#2D2B76" aria-hidden="true"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;">\n              Dashboard\n            </ion-col>\n          </ion-row>\n\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.incomingPage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-area-chart fa-2x" style="color:#3498DB"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;">Total incoming deals </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.totalSalesPage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-area-chart fa-2x" style="color:#62CB31"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Total Sales </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.sectorPage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-pie-chart fa-2x" style="color:#E67E22"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Sales by client sector </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.sourcePage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-pie-chart fa-2x" style="color:#9B59B6"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Sales by source </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.dealSourcePage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-pie-chart fa-2x" style="color:#3498DB"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Deals source </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.dealLossPage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <i class="fa fa-pie-chart fa-2x" style="color:#3C9291"></i>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Deals loss reason </ion-col>\n          </ion-row>\n        </div>\n      </button>\n      <button menuClose ion-item icon-left (click)="nav.setRoot(pages2.settingPage)">\n        <div>\n          <ion-row>\n            <ion-col col-3>\n              <ion-icon name="settings" style="color:rgb(180, 168, 168); font-size: 35px; "></ion-icon>\n            </ion-col>\n            <ion-col col-9 style="margin-top: 6px;"> Setting </ion-col>\n          </ion-row>\n        </div>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_13__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_highcharts_more__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_modules_solid_gauge__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_modules_solid_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_exporting__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_modules_exporting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_exporting__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//High Chart




__WEBPACK_IMPORTED_MODULE_7_highcharts_modules_exporting___default()(__WEBPACK_IMPORTED_MODULE_4_highcharts__);

__WEBPACK_IMPORTED_MODULE_5_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_4_highcharts__);
__WEBPACK_IMPORTED_MODULE_6_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_4_highcharts__);
//API
// import { Injectable } from '@angular/core';


var HomePage = (function () {
    function HomePage(navCtrl, app, http, authService, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.app = app;
        this.http = http;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.isLoggedIn = false;
        //position chart parameter
        this.numbers = [1, 2, 3, 4, 5, 6, 7];
        this.chartPositionsdefault = {
            "chartTarget": 1,
            "chartDealDonut": 2,
            "chartTotalSales": 3,
            "chartLastYear": 4,
            "chartLastYearRevenue": 5,
            "chartService": 6,
            "chartRegion": 7
        };
        this.chartDealDonutPosition = '';
        //API
        this.getUrl = 'http://crm.ocd.vn/api/v001/Mobile/';
        this.token = '';
        this.ngayBatDau = new Date('2017/03/31');
        this.ngayKetThuc = new Date('2018/02/05');
        this.toDay = new Date();
        this.ArrayFinancialMonth = [];
        this.jsonNgayBatDau = this.ngayBatDau.toJSON();
        this.jsonNgayKetThuc = this.ngayKetThuc.toJSON();
        this.DealTotal = 0;
        this.SaleTotalHDNow = 0;
        this.SaleTotalHDTarget = 0;
        this.SaleTotalHDLastYear = 0;
        this.SaleTotalDTLastYear = 0;
        this.SaleTotalDTNow = 0;
        this.ArraySaleHDNow = [];
        this.ArraySaleHDLastYear = [];
        this.ArraySaleDTNow = [];
        this.ArraySaleDTLastYear = [];
        this.SalevsLastYearHD = {};
        this.SalevsLastYearDT = {};
        this.arrayTrendsHD = [];
        this.arrayTrendsDT = [];
        this.arrayTrendsHDABS = [];
        this.arrayTrendsDTABS = [];
        this.salesVsTargetTotal = 0;
        //check login and back to login pages
        if (localStorage.getItem("token")) {
            this.isLoggedIn = true;
            var tokenObject = JSON.parse(localStorage.getItem("token"));
            this.token = tokenObject.access_token;
            authService.refeshToken(tokenObject.refresh_token).then(function (result) {
                localStorage.setItem('token', JSON.stringify(result));
                _this.isLoggedIn = true;
                var tokenObject = JSON.parse(localStorage.getItem("token"));
                _this.token = tokenObject.access_token;
                var that = _this;
                // temp loading 
                var loadchart = 0;
                that.showLoader();
                //chartTotalSales
                // get financial year
                that.connectWithAuth('GET', that.getUrl + "Deal_NamTaiChinhHienTai", { NgayHienTai: that.toDay.toJSON() }, that.token).then(function (result) {
                    that.financialYear = new Date(result.ApDungTuNgay);
                    that.financialDayStart = new Date(result.Tu);
                    that.financialDayEnd = new Date(result.Den);
                    // create financial last year.
                    that.financialLastYear = new Date(new Date(result.Tu).setFullYear(new Date(result.Tu).getFullYear() - 1));
                    that.strFinancialYear = _this.financialYear.getFullYear();
                    localStorage.setItem('financialYearStorage', JSON.stringify(result.ApDungTuNgay));
                    //chartDealDonut
                    that.connectWithAuth('GET', that.getUrl + "Mobile_Deal", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON() }, that.token).then(function (result) {
                        that.chartDealDonut = that.buildchartDealDonut(result);
                        localStorage.setItem('chartDealDonutAPI', JSON.stringify(result));
                        that.DealTotal = result.TongSoDeal;
                        loadchart = loadchart + 1;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // Draw chart chartTotalSales
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleTotal", { idTarget: that.strFinancialYear }, that.token).then(function (result) {
                        localStorage.setItem('chartTotalSalesAPI', JSON.stringify(result));
                        that.SaleTotalHDNow = Math.round((result[0].currentReal / 1000) * 100) / 100;
                        that.SaleTotalHDTarget = Math.round((result[0].targetReal / 1000) * 100) / 100;
                        that.chartTotalSales = that.buildchartTotalSales(result);
                        loadchart++;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartTotalSales
                    // Draw chart chartTarget
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleVsTarget_Read_Chart_Main", { idTarget: that.strFinancialYear, strLoaiGiaTri: 'HopDong' }, that.token).then(function (result) {
                        // debugger;
                        localStorage.setItem('chartTargetAPI', JSON.stringify(result));
                        that.chartTotalSales = that.buildchartTarget(result);
                        that.salesVsTargetTotal = Math.round(result[0].current);
                        loadchart++;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartTarget
                    // Draw chart chartLastYear
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleVsLastYear_Read_Chart_Detail", { namBatDau: that.financialLastYear.toJSON(), namKetThuc: that.financialDayStart.toJSON(), strLoaiGiaTri: 'HopDong' }, that.token).then(function (result) {
                        localStorage.setItem('chartLastYearAPI', JSON.stringify(result));
                        that.chartLastYear = that.buildchartLastYear(result);
                        that.ArraySaleHDLastYear = result.Data_Dau;
                        that.ArraySaleHDNow = result.Data_Sau;
                        that.SalevsLastYearHD = that.modifySalevsLastYearHD(that.ArraySaleHDNow, that.ArraySaleHDLastYear);
                        that.arrayTrendsHD = that.modifySalevsLastYearHD(that.ArraySaleHDNow, that.ArraySaleHDLastYear).arrayTrends;
                        that.arrayTrendsHDABS = that.modifySalevsLastYearHD(that.ArraySaleHDNow, that.ArraySaleHDLastYear).arrayTrendsABS;
                        that.ArrayFinancialMonth = result.Category_Date;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartLastYear
                    // Draw chart chartLastYearRevenue
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleVsLastYear_Read_Chart_Detail", { namBatDau: that.financialLastYear.toJSON(), namKetThuc: that.financialDayStart.toJSON(), strLoaiGiaTri: 'DoanhThu' }, that.token).then(function (result) {
                        localStorage.setItem('chartLastYearRevenueAPI', JSON.stringify(result));
                        that.chartLastYearRevenue = that.buildchartLastYearRevenue(result);
                        that.ArraySaleDTLastYear = result.Data_Dau;
                        that.ArraySaleDTNow = result.Data_Sau;
                        that.SalevsLastYearDT = that.modifySalevsLastYearDT(that.ArraySaleDTNow, that.ArraySaleDTLastYear);
                        that.arrayTrendsDT = that.modifySalevsLastYearDT(that.ArraySaleDTNow, that.ArraySaleDTLastYear).arrayTrends;
                        that.arrayTrendsDTABS = that.modifySalevsLastYearDT(that.ArraySaleDTNow, that.ArraySaleDTLastYear).arrayTrendsABS;
                        result.Data_Dau.forEach(function (element) {
                            that.SaleTotalDTLastYear = that.SaleTotalDTLastYear + element;
                        });
                        that.SaleTotalDTLastYear = Math.round((that.SaleTotalDTLastYear / 1000) * 100) / 100;
                        result.Data_Sau.forEach(function (element) {
                            that.SaleTotalDTNow = that.SaleTotalDTNow + element;
                        });
                        that.SaleTotalDTNow = Math.round((that.SaleTotalDTNow / 1000) * 100) / 100;
                        // SaleTotalDTLastYear = 0;
                        // SaleTotalDTNow = 0
                        that.loading.dismiss();
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartLastYearRevenue
                    //chartService
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleByService_Read_Chart", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON() }, that.token).then(function (result) {
                        // that.chartDealDonutAPI = result;
                        localStorage.setItem('chartService', JSON.stringify(result));
                        that.chartService = that.buildchartService(result);
                        loadchart++;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartService
                    //chartRegion
                    that.connectWithAuth('GET', that.getUrl + "Report_SaleByClientRegion_Read_Chart", { ngayBatDau: that.ngayBatDau.toJSON(), ngayKetThuc: that.ngayKetThuc.toJSON(), strLoai: 'DiaDanh' }, that.token).then(function (result) {
                        // that.chartDealDonutAPI = result;
                        localStorage.setItem('chartRegion', JSON.stringify(result));
                        that.chartRegion = that.buildchartRegion(result);
                        loadchart++;
                    }, function (err) {
                        _this.presentToast(err);
                    });
                    // End chartRegion
                }, function (err) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
                    _this.presentToast(err);
                });
                that.loading.dismiss();
            }, function (err) {
                navCtrl.setRoot('LoginPage');
            });
            // this.RefeshToken(tokenObject).then((result) => {
            //   debugger;
            // }, (err) => {
            //   debugger;
            // });
        }
        // check and redirect to login page
        if (!localStorage.getItem("token")) {
            navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }
        // API chart call
        var Params = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpParams */]();
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
    HomePage.prototype.connectWithAuth = function (pmethod, URL, data, token) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* Headers */]({
            "Data-type": "json",
            'Content-type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + token,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (pmethod == "GET") {
            options.search = data;
            // return this.http.get(URL, options).map(res => res.json()).toPromise();
            return new Promise(function (resolve, reject) {
                // We're using Angular HTTP provider to request the data,
                // then on the response, it'll map the JSON data to a parsed JS object.
                // Next, we process the data and resolve the promise with the new data.
                _this.http.get(URL, options)
                    .subscribe(function (data) {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    resolve(data.json());
                    //debugger;
                }, function (err) {
                    reject(err);
                });
            });
        }
        else if (pmethod == "POST") {
            return this.http.post(URL, JSON.stringify(data), options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "PUT") {
            return this.http.put(URL, data, options).map(function (res) { return res.json(); }).toPromise();
        }
        else if (pmethod == "DELETE") {
            return this.http.delete(URL, options).map(function (res) { return res.json(); }).toPromise();
        }
    };
    // Logout and loading function
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (result) {
            _this.loadingCtrl.create();
            var nav = _this.app.getRootNav();
            nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        }, function (err) {
            _this.loadingCtrl.create();
            _this.presentToast(err);
        });
    };
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading API...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    //Chart build
    HomePage.prototype.buildchartTarget = function (data) {
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartTarget', {
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
                        to: 70,
                        color: '#DF5353' // red
                    }, {
                        from: 70,
                        to: 90,
                        color: 'yellow' // yellow
                    }, {
                        from: 90,
                        to: 200,
                        color: '#55BF3B' // green
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
                    return '<span style="font-size:16px; font-weight:normal">' + (Math.round((data[0].currentReal / 1000) * 100) / 100).toLocaleString() + ' M </span>' + ' vs ' + '<span style="font-size:16px; font-weight:normal">' + (Math.round((data[0].targetReal / 1000) * 100) / 100).toLocaleString() + ' M </span>';
                }
            },
            series: [{
                    name: 'Target',
                    data: [Math.round((data[0].current) * 100) / 100],
                    tooltip: {
                        valueSuffix: '%/ 200 %'
                    }
                }]
        });
    };
    HomePage.prototype.buildchartDealDonut = function (data) {
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartDealDonut', {
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
                    colors: ['#F5BB74', '#1EA61C', '#FF040F', '#F46D0C', '#93AAB6'],
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_4_highcharts__["numberFormat"](this.point.y, 0, '.', ',') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    HomePage.prototype.buildchartTotalSales = function (data) {
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartTotalSales', {
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
                    for (var i = this.yData.length; i--;) {
                        total += this.yData[i];
                        total1 += this.xData[i];
                    }
                    ;
                    //return '<span style="font-size:12px;">' + this.name + ': ' + total + '% - ' + total1 + '</span>';
                    return '<span style="font-size:16px; font-weight: normal">' + this.name + ': ' + total1 + ' M' + '</span>';
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
                        dashStyle: 'dashdot'
                    }, {
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
                            y: Math.round((data[0].current) * 100) / 100,
                            x: (Math.round((data[0].currentReal / 1000) * 100) / 100).toLocaleString()
                        }]
                }, {
                    color: '#9A59B5',
                    name: 'Revenues (DT) ',
                    data: [{
                            radius: '80%',
                            innerRadius: '74%',
                            y: Math.round((data[1].current) * 100) / 100,
                            x: (Math.round((data[1].currentReal / 1000) * 100) / 100).toLocaleString()
                        }]
                }],
        });
    };
    HomePage.prototype.buildchartLastYear = function (data) {
        var dataDau = [];
        data.Data_Dau.forEach(function (element) {
            var d = element / 1000;
            dataDau.push(Math.round(d * 100) / 100);
        });
        var dataSau = [];
        data.Data_Sau.forEach(function (element) {
            var d = element / 1000;
            dataSau.push(Math.round(d * 100) / 100);
        });
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartLastYear', {
            chart: {
                type: 'areaspline'
            },
            title: {
                text: ' '
            },
            exporting: {
                enabled: false
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
    };
    HomePage.prototype.buildchartLastYearRevenue = function (data) {
        var dataDau = [];
        data.Data_Dau.forEach(function (element) {
            dataDau.push(Math.round((element / 1000) * 100) / 100);
        });
        var dataSau = [];
        data.Data_Sau.forEach(function (element) {
            dataSau.push(Math.round((element / 1000) * 100) / 100);
        });
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartLastYearRevenue', {
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
            exporting: {
                enabled: false
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
    };
    HomePage.prototype.buildchartService = function (data) {
        // khai báo giá trị mảng là rỗng thì khi push không bị lỗi
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round((element.SoLuong / 1000) * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartService', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_4_highcharts__["numberFormat"](this.point.y, 0, ',', '.') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    HomePage.prototype.buildchartRegion = function (data) {
        var modifydata = [];
        data.forEach(function (element) {
            var commentData = {
                name: element.Label,
                y: Math.round((element.SoLuong / 1000) * 100) / 100
            };
            modifydata.push(commentData);
        });
        return __WEBPACK_IMPORTED_MODULE_4_highcharts__["chart"]('chartRegion', {
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
                    return '<span style="font-size:16px; font-weight: normal">' + this.point.name + ': ' + __WEBPACK_IMPORTED_MODULE_4_highcharts__["numberFormat"](this.point.y, 0, ',', '.') + ' (<b>' + this.percentage.toFixed(1) + '</b>%)' + '</span>';
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
    };
    HomePage.prototype.modifySalevsLastYearHD = function (sale, lastYear) {
        var SalevsLastYear = {
            TotalSale: 0,
            TotalLastYear: 0,
            arrayTrends: [],
            arrayTrendsABS: [],
            totalTrends: 0
        };
        sale.forEach(function (element) {
            SalevsLastYear.TotalSale = SalevsLastYear.TotalSale + element;
        });
        lastYear.forEach(function (element) {
            SalevsLastYear.TotalLastYear = SalevsLastYear.TotalLastYear + element;
        });
        SalevsLastYear.TotalSale = Math.round((SalevsLastYear.TotalSale / 1000) * 100) / 100;
        SalevsLastYear.TotalLastYear = Math.round((SalevsLastYear.TotalLastYear / 1000) * 100) / 100;
        this.SaleTotalHDLastYear = SalevsLastYear.TotalLastYear;
        for (var i = 0; i < sale.length; i++) {
            if (sale[i] - lastYear[i] == 0 || sale[i] == 0) {
                SalevsLastYear.arrayTrends.push(0);
                SalevsLastYear.arrayTrendsABS.push(0);
            }
            else {
                var numberTrends = ((sale[i] - lastYear[i]) / sale[i]) * 100;
                SalevsLastYear.arrayTrends.push(Math.round(numberTrends));
                SalevsLastYear.arrayTrendsABS.push(Math.abs(Math.round(numberTrends)));
            }
        }
        SalevsLastYear.totalTrends = Math.round((((SalevsLastYear.TotalSale - SalevsLastYear.TotalLastYear) / SalevsLastYear.TotalSale) * 100));
        return SalevsLastYear;
    };
    HomePage.prototype.modifySalevsLastYearDT = function (sale, lastYear) {
        var SalevsLastYear = {
            TotalSale: 0,
            TotalLastYear: 0,
            arrayTrends: [],
            arrayTrendsABS: [],
            totalTrends: 0
        };
        sale.forEach(function (element) {
            SalevsLastYear.TotalSale = SalevsLastYear.TotalSale + element;
        });
        lastYear.forEach(function (element) {
            SalevsLastYear.TotalLastYear = SalevsLastYear.TotalLastYear + element;
        });
        SalevsLastYear.TotalSale = Math.round((SalevsLastYear.TotalSale / 1000) * 100) / 100;
        SalevsLastYear.TotalLastYear = Math.round((SalevsLastYear.TotalLastYear / 1000) * 100) / 100;
        for (var i = 0; i < sale.length; i++) {
            if (sale[i] - lastYear[i] == 0 || sale[i] == 0) {
                SalevsLastYear.arrayTrends.push(0);
                SalevsLastYear.arrayTrendsABS.push(0);
            }
            else {
                var numberTrends = ((sale[i] - lastYear[i]) / sale[i]) * 100;
                SalevsLastYear.arrayTrends.push(Math.round(numberTrends));
                SalevsLastYear.arrayTrendsABS.push(Math.abs(Math.round(numberTrends)));
            }
        }
        SalevsLastYear.totalTrends = Math.round(((SalevsLastYear.TotalSale - SalevsLastYear.TotalLastYear) / SalevsLastYear.TotalSale) * 100);
        return SalevsLastYear;
    };
    HomePage.prototype.ionViewDidLoad = function () { };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!-- <ion-title>Dashboard</ion-title> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="dashboard">\n  <ion-grid>\n    <ion-row>\n      <ng-container *ngFor="let number of numbers">\n        <ion-col *ngIf="number == chartPositions.chartTarget" col-12 col-sm-12 id="target">\n          <ion-row id="target-header" (click)="target = !target">\n            <ion-col col-2 col-sm-1 id="icon-1">\n              <ion-icon name="ios-locate-outline"></ion-icon>\n            </ion-col>\n            <ion-col col-9 col-sm-10 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                  {{salesVsTargetTotal}} %\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Sales vs target\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="target = !target"></ion-icon> -->\n            </ion-col>\n          </ion-row>\n          <ion-row id="target-body" [hidden]="!target">\n            <ion-col col-12 col-sm-12>\n              <div id="chartTarget" style="display: block;"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf="number == chartPositions.chartDealDonut" col-12 col-sm-6 id="dealDonut">\n          <ion-row id="dealDonut-header" (click)="dealDonut = !dealDonut">\n            <ion-col col-2 id="icon-1">\n              <ion-icon name="md-pricetags"></ion-icon>\n            </ion-col>\n            <ion-col col-9 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                  {{DealTotal}} deals\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Deals Total (d)\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="dealDonut = !dealDonut"></ion-icon> -->\n              <!-- <ion-icon name="md-sync"></ion-icon> -->\n            </ion-col>\n          </ion-row>\n          <ion-row id="dealDonut-body" [hidden]="!dealDonut">\n            <ion-col col-12 col-sm-12>\n              <div id="chartDealDonut" style="display: block;"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf="number == chartPositions.chartTotalSales" col-12 col-sm-6 id="totalSale">\n          <ion-row id="totalSale-header" (click)="totalSale = !totalSale">\n            <ion-col col-2 id="icon-1">\n              <i class="fa fa-pie-chart"></i>\n            </ion-col>\n            <ion-col col-9 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                  {{SaleTotalHDNow.toLocaleString()}} M\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Total sales {{strFinancialYear}}\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="totalSale = !totalSale"></ion-icon> -->\n            </ion-col>\n          </ion-row>\n          <ion-row id="totalSale-body" [hidden]="!totalSale">\n            <ion-col col-12 col-sm-12>\n              <div id="chartTotalSales" style="display: block;"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col *ngIf="number == chartPositions.chartLastYear" col-12 col-sm-12 id="lastYear">\n          <ion-row id="lastYear-header" (click)="lastYear = !lastYear">\n            <ion-col col-2 col-sm-1 id="icon-1">\n              <i class="fa fa-area-chart"></i>\n            </ion-col>\n            <ion-col col-9 col-sm-10 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:18px;font-weight: bold;color:white">\n                  {{SaleTotalHDNow.toLocaleString()}} M vs {{SaleTotalHDLastYear.toLocaleString()}} M\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Sales vs last year\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-3">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="lastYear = !lastYear"></ion-icon> -->\n            </ion-col>\n          </ion-row>\n          <ion-row id="lastYear-body" [hidden]="!lastYear">\n            <ion-col col-12 col-sm-10 col-lg-10 col-xl-11>\n              <ion-row>\n                <ion-col id="label" col-12 col-sm-6>\n                  <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                    Total sales (HD)\n                  </button>\n                </ion-col>\n                <!-- <ion-col col-12 col-sm-6 id="button">\n                <button ion-button color="light">Xem theo tổng doanh thu</button>\n              </ion-col> -->\n              </ion-row>\n              <div id="chartLastYear" style="display: block;"></div>\n            </ion-col>\n            <ion-col col-12 col-sm-2 col-lg-2 col-xl-1>\n              <ion-row id="legend-header">\n                <ion-row id="legend">\n                  <ion-col col-12style=" text-align:center;">\n                    <ion-icon name="md-arrow-round-up" style="color : green;"> {{SalevsLastYearHD.totalTrends}}% </ion-icon> - 12T\n                  </ion-col>\n                </ion-row>\n              </ion-row>\n              <ion-row id="legend-body">\n                <ng-container *ngFor="let numberTrends of [0,1,2,3,4,5,6,7,8,9,10,11]">\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsHD[numberTrends] > 0 ">\n                    <ion-icon name="md-arrow-round-up" style="color : green;"> {{arrayTrendsHDABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsHD[numberTrends] < 0">\n                    <ion-icon name="md-arrow-round-down" style="color : red;"> {{arrayTrendsHDABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsHD[numberTrends] == 0">\n                    <ion-icon name="md-arrow-forward" style="color : #E67E22;"> {{arrayTrendsHDABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n                </ng-container>\n              </ion-row>\n\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf="number == chartPositions.chartLastYearRevenue" col-12 col-sm-12 id="lastYearRevenue">\n          <ion-row id="lastYearRevenue-header" (click)="lastYearRevenue = !lastYearRevenue">\n            <ion-col col-2 col-sm-1 id="icon-1">\n              <i class="fa fa-area-chart"></i>\n            </ion-col>\n            <ion-col col-9 col-sm-10 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:18px;font-weight: bold;color:white">\n                  {{SaleTotalDTNow.toLocaleString()}} M vs {{SaleTotalDTLastYear.toLocaleString()}} M\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Sales vs last year\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="lastYearRevenue = !lastYearRevenue"></ion-icon> -->\n            </ion-col>\n\n          </ion-row>\n          <ion-row id="lastYearRevenue-body" [hidden]="!lastYearRevenue">\n            <ion-col col-12 col-sm-10 col-lg-10 col-xl-11>\n              <ion-row>\n                <ion-col id="label" col-12 col-sm-6>\n                  <button ion-button style="background-color:white; color:black;text-transform: none; font-size:18px">\n                    Revenues (DT)\n                  </button>\n                </ion-col>\n                <!-- <ion-col col-12 col-sm-6 id="button">\n                  <button ion-button color="light">Xem theo tổng doanh thu</button>\n                </ion-col> -->\n\n              </ion-row>\n\n              <div id="chartLastYearRevenue" style="display: block;"></div>\n            </ion-col>\n            <ion-col col-12 col-sm-2 col-lg-2 col-xl-1>\n              <ion-row id="legend-header">\n                <ion-row id="legend">\n                  <ion-col col-12 style=" text-align:center;">\n                    <ion-icon name="md-arrow-round-up" style="color : green;"> {{SalevsLastYearDT.totalTrends}}% </ion-icon> - 12T\n                  </ion-col>\n                </ion-row>\n              </ion-row>\n              <ion-row id="legend-body">\n                <ng-container *ngFor="let numberTrends of [0,1,2,3,4,5,6,7,8,9,10,11]">\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsDT[numberTrends] > 0 ">\n                    <ion-icon name="md-arrow-round-up" style="color : green;"> {{arrayTrendsDTABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsDT[numberTrends] < 0">\n                    <ion-icon name="md-arrow-round-down" style="color : red;"> {{arrayTrendsDTABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n\n                  <ion-col col-4 col-sm-12 id="legend" *ngIf="arrayTrendsDT[numberTrends] == 0">\n                    <ion-icon name="md-arrow-forward" style="color : #E67E22;"> {{arrayTrendsDTABS[numberTrends]}}% </ion-icon> - {{ArrayFinancialMonth[numberTrends]}}\n                  </ion-col>\n                </ng-container>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf="number == chartPositions.chartService" col-12 col-sm-6 id="service">\n          <ion-row id="service-header" (click)="service = !service">\n            <ion-col col-2 id="icon-1">\n              <i class="fa fa-pie-chart"></i>\n            </ion-col>\n            <ion-col col-9 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                  {{SaleTotalHDNow.toLocaleString()}} M\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Sales by service\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="service = !service"></ion-icon> -->\n            </ion-col>\n\n          </ion-row>\n          <ion-row id="service-body" [hidden]="!service">\n            <ion-col col-12 col-sm-12>\n              <div id="chartService" style="display: block;"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col *ngIf="number == chartPositions.chartRegion" col-12 col-sm-6 id="region">\n          <ion-row id="region-header" (click)="region = !region">\n            <ion-col col-2 id="icon-1">\n              <i class="fa fa-pie-chart"></i>\n            </ion-col>\n            <ion-col col-9 id="title">\n              <ion-row>\n                <ion-col col-12 id="" style="font-size:20px;font-weight: bold;color:white">\n                  {{SaleTotalHDNow.toLocaleString()}} M\n                </ion-col>\n                <ion-col col-12 style="color:white; font-size: 18px;">\n                  Sales by client region\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-1 id="icon-2">\n              <!-- <ion-icon name="md-arrow-dropdown" (click)="region = !region"></ion-icon> -->\n              <!-- <ion-icon name="md-sync"></ion-icon> -->\n            </ion-col>\n          </ion-row>\n          <ion-row id="region-body" [hidden]="!region">\n            <ion-col col-12 col-sm-12>\n              <div id="chartRegion" style="display: block;"></div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ng-container>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
            selector: 'page-list',template:/*ion-inline-start:"E:\Ionic\Realease\MisDashboard\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\Ionic\Realease\MisDashboard\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_incoming_incoming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_total_sales_total_sales__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_sector_sector__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_source_source__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_deal_source_deal_source__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_variable_global_variable_global__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















//login



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
                __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__["a" /* DealLossPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/deal-loss/deal-loss.module#DealLossPageModule', name: 'DealLossPage', segment: 'deal-loss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/incoming/incoming.module#IncomingPageModule', name: 'IncomingPage', segment: 'incoming', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal-source/deal-source.module#DealSourcePageModule', name: 'DealSourcePage', segment: 'deal-source', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sector/sector.module#SectorPageModule', name: 'SectorPage', segment: 'sector', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/source/source.module#SourcePageModule', name: 'SourcePage', segment: 'source', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/total-sales/total-sales.module#TotalSalesPageModule', name: 'TotalSalesPage', segment: 'total-sales', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_incoming_incoming__["a" /* IncomingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_total_sales_total_sales__["a" /* TotalSalesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_sector_sector__["a" /* SectorPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_source_source__["a" /* SourcePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_deal_source_deal_source__["a" /* DealSourcePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_deal_loss_deal_loss__["a" /* DealLossPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_setting_setting__["a" /* SettingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_variable_global_variable_global__["a" /* VariableGlobalProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariableGlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the VariableGlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VariableGlobalProvider = (function () {
    function VariableGlobalProvider(http) {
        this.http = http;
        console.log('Hello VariableGlobalProvider Provider');
        // this.chartPositionSetting(this.chartPosition);
    }
    VariableGlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], VariableGlobalProvider);
    return VariableGlobalProvider;
}());

//# sourceMappingURL=variable-global.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map