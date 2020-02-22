import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-family',
  templateUrl: './location-family.page.html',
  styleUrls: ['./location-family.page.scss'],
})
export class LocationFamilyPage implements OnInit {

  cfamily:string=null;
  clocation:string= null;

  constructor(private navCtrl:NavController,private nativeStorage: NativeStorage, private toastCtrl:ToastController, private rt:Router) { 

  }

  ngOnInit() {
  }

  async  next(){
    this.rt.navigate(['familydetails']);
   if(this.cfamily ==null || this.clocation ==null){
      let toast = await this.toastCtrl.create({
        message:"Select both the filds",
        duration:3000
      })
      toast.present();
    }
  else{
  this.nativeStorage.setItem('config', {Family: this.cfamily, Location: this.clocation}).then(() => {
      this.rt.navigate(['familydetails']);
      });
    }    
  }

}
