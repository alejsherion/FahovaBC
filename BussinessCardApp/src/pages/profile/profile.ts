import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Person } from '../../model/person';
import { PersonalInfoPage } from '../personal-info/personal-info';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {


  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdlController: ModalController) {
  }

  ionViewDidLoad() {
  }


  editInfo() {
    let modal = this.mdlController.create(PersonalInfoPage);
    modal.present();
  }

  
}
