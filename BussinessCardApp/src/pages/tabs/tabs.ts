import { Component } from '@angular/core';
import { MyCardPage } from '../my-card/my-card';
import { ConctactsPage } from '../conctacts/conctacts';
import { PreferencesPage } from '../preferences/preferences';
import { ProfilePage } from '../profile/profile'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  profileRoot = ProfilePage;
  myCardRoot = MyCardPage;
  contactsRoot = ConctactsPage;
  preferenceRoot = PreferencesPage;

  constructor() {
  }

}
