import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IncomingPage } from '../pages/incoming/incoming';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TotalSalesPage } from '../pages/total-sales/total-sales';
import { SectorPage } from '../pages/sector/sector';
import { SourcePage } from '../pages/source/source';
import { DealSourcePage } from '../pages/deal-source/deal-source';
import { DealLossPage } from '../pages/deal-loss/deal-loss';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//login
import { AuthService } from '../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
import { VariableGlobalProvider } from '../providers/variable-global/variable-global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IncomingPage,
    TotalSalesPage,
    SectorPage,
    SourcePage,
    DealSourcePage,
    DealLossPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IncomingPage,
    TotalSalesPage,
    SectorPage,
    SourcePage,
    DealSourcePage,
    DealLossPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    VariableGlobalProvider
  ]
})
export class AppModule { }
