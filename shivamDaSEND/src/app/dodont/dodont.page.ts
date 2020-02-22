import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import *as firebase from 'firebase';

@Component({
  selector: 'app-dodont',
  templateUrl: './dodont.page.html',
  styleUrls: ['./dodont.page.scss'],
})
export class DodontPage implements OnInit {

  

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
  // f:boolean = false;

  m1Name:string = '';
  m1:boolean = true;
  // f1:boolean = false;

  m2Name:string = '';
  m2:boolean = true;
  // f2:boolean = false;

  m3Name:string = '';
  m3:boolean = true;
  // f3:boolean = false;

  m4Name:string = '';
  m4:boolean = true;
  // f4:boolean = false;

  m5Name:string = '';
  m5:boolean = true;
  // f5:boolean = false;

  m6Name:string = '';
  m6:boolean = true;
  // f6:boolean = false;

  jobProfile:string ='';
  jobProfile1:string ='';
  jobProfile2:string ='';
  jobProfile3:string ='';
  jobProfile4:string ='';
  jobProfile5:string ='';
  jobProfile6:string ='';
  constructor(private navCtrl:NavController, private nativeStorage: NativeStorage, private rt:Router) { 
    // console.log(firebase.auth().currentUser.email);
  }

  ngOnInit() {
    this.nativeStorage.getItem('config')
    .then(
      (data) => {
        this.family = data.Family;
        this.city = data.City;

        if(this.family == "2"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
        }
        else if(this.family == "3"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
          
          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;
          this.jobProfile2 = data.p3.Jp2;
        }

        else if(this.family == "4"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
          
          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;
          this.jobProfile2 = data.p3.Jp2;

          
          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;
          this.jobProfile3 = data.p4.Jp3;
        }

        else if(this.family == "5"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
          
          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;
          this.jobProfile2 = data.p3.Jp2;

          
          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;
          this.jobProfile3 = data.p4.Jp3;

          this.m4Name = data.p5.M4Name;
          this.m4 = data.p5.M4male;
          // this.f4 = data.p5.M4female;
          this.jobProfile4 = data.p5.Jp4;
        }
        
        else if(this.family == "6"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
          
          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;
          this.jobProfile2 = data.p3.Jp2;

          
          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;
          this.jobProfile3 = data.p4.Jp3;

          this.m4Name = data.p5.M4Name;
          this.m4 = data.p5.M4male;
          // this.f4 = data.p5.M4female;
          this.jobProfile4 = data.p5.Jp4;

          this.m5Name = data.p6.M5Name;
          this.m5 = data.p6.M5male;
          // this.f5 = data.p6.M5female;
          this.jobProfile5 = data.p6.Jp5;
        }

        else {
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
          this.jobProfile = data.p1.Jp;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
          this.jobProfile1 = data.p2.Jp1;
          
          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;
          this.jobProfile2 = data.p3.Jp2;

          
          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;
          this.jobProfile3 = data.p4.Jp3;

          this.m4Name = data.p5.M4Name;
          this.m4 = data.p5.M4male;
          // this.f4 = data.p5.M4female;
          this.jobProfile4 = data.p5.Jp4;

          this.m5Name = data.p6.M5Name;
          this.m5 = data.p6.M5male;
          // this.f5 = data.p6.M5female;
          this.jobProfile5 = data.p6.Jp5;

          
          this.m6Name = data.p7.M6Name;
          this.m6 = data.p7.M6male;
          // this.f6 = data.p7.M6female;
          this.jobProfile6 = data.p7.Jp6;
        }

        console.log(data);
      },
      error => console.error(error)
    );
  }

    next(){
     if(this.family == "2"){
      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });

      
     } else if(this.family == "3"){
      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,

        person3Name: this.m2Name,
        person3Male: this.m2,
        person3JP: this.jobProfile2,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });
     }  else if(this.family == "4"){
      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,

        person3Name: this.m2Name,
        person3Male: this.m2,
        person3JP: this.jobProfile2,

        person4Name: this.m3Name,
        person4Male: this.m3,
        person4JP: this.jobProfile3,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });
     } else if(this.family == "5"){
      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,

        person3Name: this.m2Name,
        person3Male: this.m2,
        person3JP: this.jobProfile2,

        person4Name: this.m3Name,
        person4Male: this.m3,
        person4JP: this.jobProfile3,

        person5Name: this.m4Name,
        person5Male: this.m4,
        person5JP: this.jobProfile4,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });
     } else if(this.family == "6"){
      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,

        person3Name: this.m2Name,
        person3Male: this.m2,
        person3JP: this.jobProfile2,

        person4Name: this.m3Name,
        person4Male: this.m3,
        person4JP: this.jobProfile3,

        person5Name: this.m4Name,
        person5Male: this.m4,
        person5JP: this.jobProfile4,

        person6Name: this.m5Name,
        person6Male: this.m5,
        person6JP: this.jobProfile5,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });
     } else{

      firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        person1Name: this.mName,
        person1Male: this.m,
        person1JP: this.jobProfile,

        person2Name: this.m1Name,
        person2Male: this.m1,
        person2JP: this.jobProfile1,

        person3Name: this.m2Name,
        person3Male: this.m2,
        person3JP: this.jobProfile2,

        person4Name: this.m3Name,
        person4Male: this.m3,
        person4JP: this.jobProfile3,

        person5Name: this.m4Name,
        person5Male: this.m4,
        person5JP: this.jobProfile4,

        person6Name: this.m5Name,
        person6Male: this.m5,
        person6JP: this.jobProfile5,

        person7Name: this.m6Name,
        person7Male: this.m6,
        person7JP: this.jobProfile6,
      
        dSweeping: this.Sweeping,
        dVacuuming: this.Vacuuming,
        dWashing_dishes: this.Washing_dishes,
        dFeeding_pets: this.Feeding_pets,
        dDoing_laundry: this.Doing_laundry,
        dPreparing_meals: this.Preparing_meals,
        dCleaning_bathrooms: this.Cleaning_bathrooms,
        dDusting: this.Dusting,

        wWashing_bedding: this.Washing_bedding,
        wMopping_floors: this.Mopping_floors,
        wWatering_plants: this.Watering_plants,
        wMowing_the_lawn: this.Mowing_the_lawn,
        wWeeding_the_garden: this.Weeding_the_garden,
        wTaking_out_the_trash: this.Taking_out_the_trash,
        wWash_the_car: this.Wash_the_car,

        xmWashing_windows: this.Washing_windows,
        xmBathing_pets: this.Bathing_pets,
        xmClean_refrigerator: this.Clean_refrigerator,
        xmChange_air_filters: this.Change_air_filters,
        xmClean_blinds: this.Clean_blinds,
        xmVacuum_curtains: this.Vacuum_curtains

      }).then((data)=> {
        this.rt.navigate(['deshboard']);
      }).catch((err)=> {
        console.log(err)
      });

     }



    }


    sweep(){
      this.Sweeping =! this.Sweeping;
    }
    vacu(){
      this.Vacuuming =! this.Vacuuming;
    }
    WashD(){
      this.Washing_dishes =! this.Washing_dishes;
    }
    FeedP(){
      this.Feeding_pets =! this.Feeding_pets;
    }
    Laundry(){
      this.Doing_laundry =! this.Doing_laundry;
    }
    PreMeals(){
      this.Preparing_meals =! this.Preparing_meals;
    }
    CleanBathrooms(){
      this.Cleaning_bathrooms =! this.Cleaning_bathrooms;
    }
    Dust(){
      this.Dusting =! this.Dusting;
    }

    WashBed(){
      this.Washing_bedding =! this.Washing_bedding;
    }
    MoppFloor(){
      this.Mopping_floors =!this.Mopping_floors;
    }
    WaterPlant(){
      this.Watering_plants =! this.Watering_plants;
    }
    MowingLawn(){
      this.Mowing_the_lawn =! this.Mowing_the_lawn;
    }
    WeedGarden(){
      this.Weeding_the_garden =! this.Weeding_the_garden;
    }
    TakingTrash(){
      this.Taking_out_the_trash =! this.Taking_out_the_trash;
    }
    WashCar(){
      this.Wash_the_car =! this.Wash_the_car;
    }


    WashWindow(){
      this.Washing_windows =! this.Washing_windows;
    }
    BathPet(){
      this.Bathing_pets =! this.Bathing_pets;
    }
    CleanRefrigerator(){
      this.Clean_refrigerator = !this.Clean_refrigerator;
    }
    AirFilters(){
      this.Change_air_filters =! this.Change_air_filters;
    }
    CleanBlinds(){
      this.Clean_blinds =! this.Clean_blinds;
    }
    VacuumCurtains(){
      this.Vacuum_curtains =! this.Vacuum_curtains;
    }
}
