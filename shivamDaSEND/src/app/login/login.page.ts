import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private googlePlus: GooglePlus, public loadingCtrl: LoadingController, public toastCtrl: ToastController,public navCtrl: NavController) {
    this.autoLogin();
   }

  ngOnInit() {
  }

  autoLogin(){
    this.navCtrl.navigateRoot('location');
    this.googlePlus.login({
      'webClientId': '716324348848-okflgb60bei6rc2gmir350od45ml7mre.apps.googleusercontent.com'
    }).then( async (res)=> {
      let loading = await this.loadingCtrl.create({
        message: 'Please wait...'
      });
    
      loading.present();
    
      setTimeout(() => {
        loading.dismiss();
      }, 2000);
      
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(async(suc) =>{
        let name = firebase.auth().currentUser.displayName;
        // this.storage.setItem('email', firebase.auth().currentUser.email );
        this.navCtrl.navigateRoot('location');
        let toast =await this.toastCtrl.create({
          message: "welcome " + name,
          duration: 3000
        });
        toast.present();

      }).catch( err => {
        alert("Not suc");
      })
    })
  }

}
