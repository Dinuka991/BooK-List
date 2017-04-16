import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFire , FirebaseListObservable  } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import {AngularFireModule} from 'angularfire2' ;

export const firebaseConfig = {
  apiKey: "AIzaSyDRJPv7vEE5aRz0IVIhPTyoCDp9hRljeog",
    authDomain: "my-booklist-c5144.firebaseapp.com",
    databaseURL: "https://my-booklist-c5144.firebaseio.com/",
    projectId: "my-booklist-c5144",
    storageBucket: "my-booklist-c5144.appspot.com",
    messagingSenderId: "789508297778"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule ,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
