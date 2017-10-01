import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QrCodePage } from '../qr-code/qr-code';
import { User } from '../../model/person';
import { ProfileService } from '../../providers/profile-service';

@Component({
  selector: 'page-my-card',
  templateUrl: 'my-card.html',
})
export class MyCardPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdlController: ModalController,
    public _profileService: ProfileService
  ) {
  }

  person: User;

  ionViewDidLoad() {
    this.person = this._profileService.getPersonalInfo();
  }

  createdCode: string = "1075211187";

  viewQR() {
    let modal = this.mdlController.create(QrCodePage);
    modal.present();
  }
}
