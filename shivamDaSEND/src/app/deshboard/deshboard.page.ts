import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.page.html',
  styleUrls: ['./deshboard.page.scss'],
})
export class DeshboardPage implements OnInit {

  getData:any [] = [];
  email:string;
  toggle:boolean=true;

  p1Do:any []= [];
  p2Do:any []= [];
  p3Do:any []= [];
  p4Do:any []= [];
  p5Do:any []= [];
  p6Do:any []= [];
  p7Do:any []= [];

  p1:boolean = true;
  p2:boolean = true;
  p3:boolean = false;
  p4:boolean = false;
  p5:boolean = false;
  p6:boolean = false;
  p7:boolean = false;

  Sweeping:boolean = false;
  Vacuuming:boolean = false;
  Washing_dishes:boolean = false;
  Feeding_pets:boolean = false;
  Doing_laundry:boolean = false;
  Preparing_meals:boolean = false;
  Cleaning_bathrooms:boolean = false;
  Dusting: boolean = false;

  Washing_bedding:boolean = false;
  Mopping_floors:boolean = false;
  Watering_plants:boolean = false;
  Mowing_the_lawn:boolean = false;
  Weeding_the_garden:boolean = false;
  Taking_out_the_trash:boolean = false;
  Wash_the_car:boolean = false;

  Washing_windows:boolean =false;
  Bathing_pets:boolean = false;
  Clean_refrigerator:boolean =false;
  Change_air_filters:boolean =false;
  Clean_blinds:boolean = false;
  Vacuum_curtains: boolean = false;
  



  family:string;
  city:string;

  mName:string = '';
  m:boolean = true;

  m1Name:string = '';
  m1:boolean = true;

  m2Name:string = '';
  m2:boolean = true;

  m3Name:string = '';
  m3:boolean = true;

  m4Name:string = '';
  m4:boolean = true;

  m5Name:string = '';
  m5:boolean = true;

  m6Name:string = '';
  m6:boolean = true;

  jobProfile:string ='';
  jobProfile1:string ='';
  jobProfile2:string ='';
  jobProfile3:string ='';
  jobProfile4:string ='';
  jobProfile5:string ='';
  jobProfile6:string ='';

  

  constructor(private rt:Router, private nativeStorage: NativeStorage,private alertCtrl:AlertController) { 
    // this.nativeStorage.getItem('config')
    // .then(
    //   (data) => {
    //     this.family = data.Family;
    //     this.city = data.City;
    //     firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).get().then( docs => {
    //       docs.forEach(async doc => {
    //         this.getData.push(doc);
    //       });
    //       console.log(this.getData);
    //     }).catch( err => console.log(err));

    //     if(this.family=="2"){
    //       this.p1 = true;
    //       this.p2 = true;
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;

    //       this.Sweeping = this.getData[0].data().dSweeping;
    //       this.Vacuuming = this.getData[0].data().dVacuuming;
    //       this.Washing_dishes = this.getData[0].data().dWashing_dishes;
    //       this.Feeding_pets = this.getData[0].data().dFeeding_pets;
    //       this.Doing_laundry = this.getData[0].data().dDoing_laundry;
    //       this.Preparing_meals = this.getData[0].data().dPreparing_meals;
    //       this.Cleaning_bathrooms = this.getData[0].data().dCleaning_bathrooms;
    //       this.Dusting = this.getData[0].data().Dusting;


    //       this.Washing_bedding = this.getData[0].data().wWashing_bedding;
    //       this.Mopping_floors = this.getData[0].data().wMopping_floors;
    //       this.Watering_plants = this.getData[0].data().wWatering_plants;
    //       this.Mowing_the_lawn = this.getData[0].data().wMowing_the_lawn;
    //       this.Weeding_the_garden = this.getData[0].data().wWeeding_the_garden;
    //       this.Taking_out_the_trash = this.getData[0].data().wTaking_out_the_trash;
    //       this.Wash_the_car = this.getData[0].data().wWash_the_car;


    //       this.Washing_windows = this.getData[0].data().xmWashing_windows;
    //       this.Bathing_pets = this.getData[0].data().xmBathing_pets;
    //       this.Clean_refrigerator = this.getData[0].data().xmClean_refrigerator;
    //       this.Change_air_filters = this.getData[0].data().xmChange_air_filters;
    //       this.Clean_blinds = this.getData[0].data().xmClean_blinds;
    //       this.Vacuum_curtains = this.getData[0].data().xmVacuum_curtains;

    //       if(this.Sweeping == true){

    //       }else{
    //         if(this.toggle == true){
    //           this.p1Do.push("Sweeping");
    //           this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Sweeping");
    //           this.toggle =! this.toggle;
    //         }
            
    //       }

    //       if(this.Vacuuming == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Vacuuming");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Vacuuming");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Washing_dishes == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Washing Dishes");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Washing Dishes");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Feeding_pets == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Feeding Pets");
    //         this.toggle =! this.toggle;
    //         } else {
    //           this.p2Do.push("Feeding Pets");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Doing_laundry == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Doing Laundry");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Doing Laundry");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Preparing_meals == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Preparing Meals");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Preparing Meals");
    //           this.toggle =! this.toggle;
    //         }
    //       }


    //       if(this.Cleaning_bathrooms == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Cleaning Bathrooms");
    //         this.toggle =! this.toggle;
    //         } else {
    //           this.p2Do.push("Cleaning Bathrooms");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Dusting == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Dusting");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Dusting");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Washing_bedding == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Washing Bedding");
    //         this.toggle =! this.toggle;
    //         } else {
    //           this.p2Do.push("Washing Bedding");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Mopping_floors == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Mopping Floors");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Mopping Floors");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Watering_plants == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Watering Plants");
    //         this.toggle =! this.toggle;
    //         } else {
    //           this.p2Do.push("Watering Plants");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Mowing_the_lawn == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Mowing The Lawn");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Mowing The Lawn");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Weeding_the_garden == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Weeding The Garden");
    //         this.toggle =! this.toggle;
    //         } else {
    //           this.p2Do.push("Weeding The Garden");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Taking_out_the_trash == true){

    //       }else{
    //         if(this.toggle == true){
    //         this.p1Do.push("Taking Out The Trash");
    //         this.toggle =! this.toggle;
    //         } else{
    //           this.p2Do.push("Taking Out The Trash");
    //           this.toggle =! this.toggle;
    //         }
    //       }

    //       if(this.Wash_the_car == true){

    //       }else{
    //         this.p1Do.push("Wash The Car");
    //       }

    //       if(this.Washing_windows == true){

    //       }else{
    //         this.p1Do.push("Washing Windows");
    //       }

    //       if(this.Bathing_pets == true){

    //       }else{
    //         this.p1Do.push("Bathing Pets");
    //       }


    //       if(this.Clean_refrigerator == true){

    //       }else{
    //         this.p1Do.push("Clean Refrigerator");
    //       }


    //       if(this.Change_air_filters == true){

    //       }else{
    //         this.p1Do.push("Change Air Filters");
    //       }

    //       if(this.Clean_blinds == true){

    //       }else{
    //         this.p1Do.push("Clean Blinds");
    //       }

    //       if(this.Vacuum_curtains == true){

    //       }else{
    //         this.p1Do.push("Vacuum Curtains");
    //       }



    //     } else if(this.family=="3"){
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;
          
    //       this.m2Name = data.p3.M2Name;
    //       this.m2 = data.p3.M2male;
    //       this.jobProfile2 = data.p3.Jp2;
    //     } else if(this.family=="4"){
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;
          
    //       this.m2Name = data.p3.M2Name;
    //       this.m2 = data.p3.M2male;
    //       this.jobProfile2 = data.p3.Jp2;

          
    //       this.m3Name = data.p4.M3Name;
    //       this.m3 = data.p4.M3male;
    //       this.jobProfile3 = data.p4.Jp3;
    //     } else if(this.family=="5"){
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;
          
    //       this.m2Name = data.p3.M2Name;
    //       this.m2 = data.p3.M2male;
    //       this.jobProfile2 = data.p3.Jp2;

          
    //       this.m3Name = data.p4.M3Name;
    //       this.m3 = data.p4.M3male;
    //       this.jobProfile3 = data.p4.Jp3;

    //       this.m4Name = data.p5.M4Name;
    //       this.m4 = data.p5.M4male;
    //       this.jobProfile4 = data.p5.Jp4;
    //     } else if(this.family=="6"){
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;
          
    //       this.m2Name = data.p3.M2Name;
    //       this.m2 = data.p3.M2male;
    //       this.jobProfile2 = data.p3.Jp2;

          
    //       this.m3Name = data.p4.M3Name;
    //       this.m3 = data.p4.M3male;
    //       this.jobProfile3 = data.p4.Jp3;

    //       this.m4Name = data.p5.M4Name;
    //       this.m4 = data.p5.M4male;
    //       this.jobProfile4 = data.p5.Jp4;

    //       this.m5Name = data.p6.M5Name;
    //       this.m5 = data.p6.M5male;
    //       this.jobProfile5 = data.p6.Jp5;
    //     } else{
    //       this.mName = data.p1.MName;
    //       this.m = data.p1.Mmale;
    //       this.jobProfile = data.p1.Jp;
  
    //       this.m1Name = data.p2.M1Name;
    //       this.m1 = data.p2.M1male;
    //       this.jobProfile1 = data.p2.Jp1;
          
    //       this.m2Name = data.p3.M2Name;
    //       this.m2 = data.p3.M2male;
    //       this.jobProfile2 = data.p3.Jp2;

    //       this.m3Name = data.p4.M3Name;
    //       this.m3 = data.p4.M3male;
    //       this.jobProfile3 = data.p4.Jp3;

    //       this.m4Name = data.p5.M4Name;
    //       this.m4 = data.p5.M4male;
    //       this.jobProfile4 = data.p5.Jp4;

    //       this.m5Name = data.p6.M5Name;
    //       this.m5 = data.p6.M5male;
    //       this.jobProfile5 = data.p6.Jp5;

    //       this.m6Name = data.p7.M6Name;
    //       this.m6 = data.p7.M6male;
    //       this.jobProfile6 = data.p7.Jp6;
    //     }

    //   });

  
      

       
  }

  ngOnInit() {
    
  }

  about(){
    this.rt.navigate(['about']);
  }

}
