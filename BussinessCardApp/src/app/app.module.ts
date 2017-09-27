import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { PreferencesPage } from '../pages/preferences/preferences';
import { MyCardPage } from '../pages/my-card/my-card';
import { ConctactsPage } from '../pages/conctacts/conctacts'; 
import { ProfileServiceProvider } from '../providers/profile-service';
import { ProfilePage } from '../pages/profile/profile';
import { PersonalInfoPage } from '../pages/personal-info/personal-info';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const FIREBASECONFIG = {
  apiKey: "AIzaSyDpPycPBjkJlieEKyM4oU5Lkjf0vkD69d8",
  authDomain: "bussinesscard-67b08.firebaseapp.com",
  databaseURL: "https://bussinesscard-67b08.firebaseio.com",
  projectId: "bussinesscard-67b08",
  storageBucket: "bussinesscard-67b08.appspot.com",
  messagingSenderId: "1087490052296"
};


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    MyCardPage,
    ConctactsPage,
    PreferencesPage,
    ProfilePage,
    PersonalInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASECONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MyCardPage,
    ConctactsPage,
    PreferencesPage,
    ProfilePage,
    PersonalInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfileServiceProvider,
  ]
})
export class AppModule {}
