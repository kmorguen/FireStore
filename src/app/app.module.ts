import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBMZW5wsRjlmekcZ6nR40FZd50j90o23o",
  authDomain: "pressingapp-4c94a.firebaseapp.com",
  databaseURL: "https://pressingapp-4c94a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pressingapp-4c94a",
  storageBucket: "pressingapp-4c94a.appspot.com",
  messagingSenderId: "514280661169",
  appId: "1:514280661169:web:8859db27d10dbf34024290",
  measurementId: "G-XLSR01KBBR"
};

@NgModule({
  declarations: [AppComponent],
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
