import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { IncomingPage } from '../pages/incoming/incoming';
import { TotalSalesPage } from '../pages/total-sales/total-sales';
import { SectorPage } from '../pages/sector/sector';
import { SourcePage } from '../pages/source/source';
import { DealSourcePage } from '../pages/deal-source/deal-source';
import { DealLossPage } from '../pages/deal-loss/deal-loss';
import { SettingPage } from '../pages/setting/setting';
// login
import { AuthService } from '../providers/auth-service/auth-service';
import { App, LoadingController, ToastController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;


  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;
  pages2: any;
  loading: any;
  isLoggedIn: boolean = false;
  userStorage = {
    sub: 'OCD',
    email: 'ocd@ocd.vn',
    profile: 'assets/imgs/logo.png'
  };
  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public app: App,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {

    if (localStorage.getItem("userStorage")) {
      this.userStorage = JSON.parse(localStorage.getItem("userStorage"));
    } else {
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
      listPage: ListPage,
      homePage: HomePage,
      incomingPage: IncomingPage,
      totalSalesPage: TotalSalesPage,
      sectorPage: SectorPage,
      sourcePage: SourcePage,
      dealSourcePage: DealSourcePage,
      dealLossPage: DealLossPage,
      settingPage: SettingPage
    }

  }
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
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (localStorage.getItem("userStorage")) {
      this.userStorage = JSON.parse(localStorage.getItem("userStorage"));
    }
    this.nav.setRoot(page.component);
  }
}
