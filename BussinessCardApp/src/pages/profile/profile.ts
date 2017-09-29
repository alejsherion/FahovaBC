import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from '../../model/person';
import { PersonalInfoPage } from '../personal-info/personal-info';
import { ProfileService } from '../../providers/profile-service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  person: User;
  scannedCode: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdlController: ModalController,
    public _profileService: ProfileService,
    private barcodeScanner: BarcodeScanner,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.person = this._profileService.getPersonalInfo();
  }


  editInfo() {
    let modal = this.mdlController.create(PersonalInfoPage);
    modal.present();
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      
      const alert = this.alertCtrl.create({
        title: 'Código leido',
        subTitle: barcodeData.text,
        buttons: ['Dismiss']
      });
      alert.present();
    }, (err) => {
        console.log('Error: ', err);
    });
  }
}
