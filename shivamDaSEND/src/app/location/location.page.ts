import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  family:string=null;
  location:string=null;

  constructor(private navCtrl:NavController,private nativeStorage: Storage, private toastCtrl:ToastController, private rt:Router) { 

  }

  ngOnInit() {
  }

  async  next(){
   if(this.family == null || this.location == null){
      let toast = await this.toastCtrl.create({
        message:"Select both the filds",
        duration:2000
      })
      toast.present();
    }
  else{
  this.nativeStorage.set('info', {Family: this.family, Location: this.location}).then(() => {
      this.rt.navigate(['details']);
      });
    }    
  }

}
