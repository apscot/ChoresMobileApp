import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';
import {AngularFireModule} from 'angularfire2';

var firebaseConfig = {
  apiKey: "AIzaSyDqCZd7_vDvm6FJFWgvNiEM3XMdG18GAog",
  authDomain: "shivamda-d0e6f.firebaseapp.com",
  databaseURL: "https://shivamda-d0e6f.firebaseio.com",
  projectId: "shivamda-d0e6f",
  storageBucket: "shivamda-d0e6f.appspot.com",
  messagingSenderId: "716324348848",
  appId: "1:716324348848:web:4e2a679f1a4ec30224ec75",
  measurementId: "G-MD1KRFT6FG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,IonicStorageModule.forRoot(), IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [
    StatusBar,
    SplashScreen,GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
