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
    this.contacts = this._profileService.getContacs()
    if(e.cancelable){
      return;
    }

    let filterContacts: Contact[] = [];
    for(let c of this.contacts){
      if(c.alias.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1){
        filterContacts.push(c);
      }
    }
    
    this.contacts = filterContacts;
  }

  onCancel(e){
    this.contacts = this._profileService.getContacs()
  }

  setfavorite(contact: Contact){
    contact.isFavorite = !contact.isFavorite
  }

  deleteContact(contact: Contact){
    let index = this.contacts.indexOf(contact, 0);
    if (index > -1) {
      this.contacts.splice(index, 1);
    }
  }
}
