import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConctactsPage } from './conctacts';

@NgModule({
  declarations: [
    ConctactsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConctactsPage),
  ],
})
export class ConctactsPageModule {}
