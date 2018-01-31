import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealSourcePage } from './deal-source';

@NgModule({
  declarations: [
    DealSourcePage,
  ],
  imports: [
    IonicPageModule.forChild(DealSourcePage),
  ],
})
export class DealSourcePageModule {}
