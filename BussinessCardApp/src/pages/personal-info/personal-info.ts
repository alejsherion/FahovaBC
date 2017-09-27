import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {  User } from '../../model/person';

@Component({
  selector: 'page-personal-info',
  templateUrl: 'personal-info.html',
})
export class PersonalInfoPage {

  person: User;

  visiblePersonalPanel: boolean = false;
  visibleProfessionalPanel: boolean = false;
  visibleContactPanel: boolean = false;
  visiblePersonalizePanel: boolean = false;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  showPanel(panelName: string) {
    switch (panelName) {
      case "personal": {
        this.visiblePersonalPanel = !this.visiblePersonalPanel;
        this.visibleProfessionalPanel = false;
        this.visibleContactPanel = false;
        this.visiblePersonalizePanel = false;
        break;
      }
      case "professional": {
        this.visibleProfessionalPanel = !this.visibleProfessionalPanel;
        this.visiblePersonalPanel = false;
        this.visibleContactPanel = false;
        this.visiblePersonalizePanel = false;
        break;
      }
      case "contact": {
        this.visibleContactPanel = !this.visibleContactPanel;
        this.visiblePersonalPanel = false;
        this.visibleProfessionalPanel = false;
        this.visiblePersonalizePanel = false;
        break;
      }
      case "personalize": {
        this.visiblePersonalizePanel = !this.visiblePersonalizePanel;
        this.visibleContactPanel = false;
        this.visiblePersonalPanel = false;
        this.visibleProfessionalPanel = false;
        break;
      }
    }
  }
}
