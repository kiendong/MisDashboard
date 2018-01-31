import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TotalSalesPage } from './total-sales';

@NgModule({
  declarations: [
    TotalSalesPage,
  ],
  imports: [
    IonicPageModule.forChild(TotalSalesPage),
  ],
})
export class TotalSalesPageModule {}
