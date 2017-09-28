import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { User } from '../../model/person';
import { PersonalInfoPage } from '../personal-info/personal-info';
import { ProfileService } from '../../providers/profile-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  person: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mdlController: ModalController,
    public _profileService: ProfileService) {
  }

  ionViewDidLoad() {
    this.person = this._profileService.getPersonalInfo();
  }


  editInfo() {
    let modal = this.mdlController.create(PersonalInfoPage);
    modal.present();
  }

  
}
