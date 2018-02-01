import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
//import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loading: any;
  loginData = { username: '', password: '' };
  data: any;

  constructor(public navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) { }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      // this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', this.data.access_token);

      let that = this;
      this.authService.loadUser(localStorage.getItem("token")).then((data) => {

        console.log(data);
        localStorage.setItem('userStorage', JSON.stringify(data));
        that.navCtrl.setRoot(HomePage);
        // load xong hết mới tắt loading
        this.loading.dismiss();
      });

    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }

  //register() {
  //  this.navCtrl.push(RegisterPage);
  //}

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading...'
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

}
