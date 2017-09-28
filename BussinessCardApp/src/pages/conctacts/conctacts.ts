import { ProfileService } from './../../providers/profile-service';
import { Contact } from './../../model/contacts';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-conctacts',
  templateUrl: 'conctacts.html',
})
export class ConctactsPage {

  inputSearch: string;

  contacts: Contact[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _profileService: ProfileService
  ) {
  }

  ionViewDidLoad() {
    this.contacts = this._profileService.getContacs()
  }

  onInput(e){

  }

  onCancel(e){

  }

}
