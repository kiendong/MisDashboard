import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  chartPositions = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {

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
  setChartPosition(chartPositions) {
    if (chartPositions.chartTarget < 1 || chartPositions.chartTarget > 7 ||
      chartPositions.chartDealDonut < 1 || chartPositions.chartDealDonut > 7 ||
      chartPositions.chartTotalSales < 1 || chartPositions.chartTotalSales > 7 ||
      chartPositions.chartLastYear < 1 || chartPositions.chartLastYear > 7 ||
      chartPositions.chartLastYearRevenue < 1 || chartPositions.chartLastYearRevenue > 7 ||
      chartPositions.chartService < 1 || chartPositions.chartService > 7 ||
      chartPositions.chartRegion < 1 || chartPositions.chartRegion > 7) {
      this.presentToast('Error: number input form 1 to 7');
    } else {
      localStorage.setItem('chartPositions', JSON.stringify(this.chartPositions));
      this.presentToast('Success!');
    }

  }
  ionViewDidLoad() {
    if (localStorage.getItem("chartPositions")) {
      this.chartPositions = JSON.parse(localStorage.getItem("chartPositions"));
    }
  }

}
