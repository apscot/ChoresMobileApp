import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import *as firebase from 'firebase';
import { Storage } from '@ionic/storage';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-dodont',
  templateUrl: './dodont.page.html',
  styleUrls: ['./dodont.page.scss'],
})
export class DodontPage implements OnInit {

  works:any[] = [];
  work1s:any = [];
  work2s:any = [];
  work3s:any[] = [];
  work4s:any[] = [];
  work5s:any[] = [];
  work6s:any[] = [];
  work7s:any[] = [];


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
  female:number = 1;
  male:number = 2;

  m1n:string = null;
  m1:boolean = true;
  m1jp:string ='';

  m2n:string = null;
  m2:boolean = true;
  m2jp:string ='';

  m3n:string = null;
  m3:boolean = true;
  m3jp:string ='';

  m4n:string = null;
  m4:boolean = true;
  m4jp:string ='';

  m5n:string = null;
  m5:boolean = true;
  m5jp:string ='';

  m6n:string = null;
  m6:boolean = true;
  m6jp:string ='';

  m7n:string = null;
  m7:boolean = true;
  m7jp:string ='';

  constructor(private navCtrl:NavController, private nativeStorage: Storage, private rt:Router) { 
    // console.log(firebase.auth().currentUser.email);
  }

  ngOnInit() {
    this.nativeStorage.get('info')
    .then(
      (data) => {
        console.log(data);
        this.family = data.Family;
        this.city = data.City;

        if(this.family == "2"){
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
        }
        else if(this.family == "3"){
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
          
          this.m3n = data.Members[2].Name;
          this.m3 = data.Members[2].Male;
          this.m3jp = data.Members[2].Job;
        }

        else if(this.family == "4"){
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
          
          this.m3n = data.Members[2].Name;
          this.m3 = data.Members[2].Male;
          this.m3jp = data.Members[2].Job;

          
          this.m4n = data.Members[3].Name;
          this.m4 = data.Members[3].Male;
          this.m4jp = data.Member[3].Job;
        }

        else if(this.family == "5"){
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
          
          this.m3n = data.Members[2].Name;
          this.m3 = data.Members[2].Male;
          this.m3jp = data.Members[2].Job;

          
          this.m4n = data.Members[3].Name;
          this.m4 = data.Members[3].Male;
          this.m4jp = data.Member[3].Job;

          this.m5n = data.Members[4].Name;
          this.m5 = data.Members[4].Male;
          this.m5jp = data.Member[4].Job;
        }
        
        else if(this.family == "6"){
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
          
          this.m3n = data.Members[2].Name;
          this.m3 = data.Members[2].Male;
          this.m3jp = data.Members[2].Job;

          
          this.m4n = data.Members[3].Name;
          this.m4 = data.Members[3].Male;
          this.m4jp = data.Member[3].Job;

          this.m5n = data.Members[4].Name;
          this.m5 = data.Members[4].Male;
          this.m5jp = data.Member[4].Job;

          this.m6n = data.Members[5].Name;
          this.m6 = data.Members[5].Male;
          this.m6jp = data.Member[5].Job;
        }

        else {
          this.m1n = data.Members[0].Name;
          this.m1 = data.Members[0].Male;
          this.m1jp = data.Members[0].Job;
  
          this.m2n = data.Members[1].Name;
          this.m2 = data.Members[1].Male;
          this.m2jp = data.Members[1].Job;
          
          this.m3n = data.Members[2].Name;
          this.m3 = data.Members[2].Male;
          this.m3jp = data.Members[2].Job;

          
          this.m4n = data.Members[3].Name;
          this.m4 = data.Members[3].Male;
          this.m4jp = data.Member[3].Job;

          this.m5n = data.Members[4].Name;
          this.m5 = data.Members[4].Male;
          this.m5jp = data.Member[4].Job;

          this.m6n = data.Members[5].Name;
          this.m6 = data.Members[5].Male;
          this.m6jp = data.Member[5].Job;
          
          this.m7n = data.Members[6].Name;
          this.m7 = data.Members[6].Male;
          this.m7jp = data.Member[6].Job;
        }

      },
      error => console.error(error)
    );

    
  }

    next(){
     if(this.family == "2"){
       this.works = [];
      this.check();
      console.log(this.works.length);
      let divided = this.works.length ;
      console.log(divided, this.works);
      this.work1s = [];
      this.work2s = [];
      for(let i=0; i<= divided-1; i+= 2){
        this.work1s.push(this.works[i]);
      }

      for(let j=0; j< divided-1; j+= 2){
        this.work2s.push(this.works[1+j]);
      }
     
    let navOption: NavigationOptions = {
      queryParams: {
        'w1': this.work1s,
        'w2': this.work2s
      }
    }
     
      this.navCtrl.navigateRoot('deshboard', navOption)

      // firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

        // person1Name: this.m1n,
        // person1Male: this.m,
        // person1JP: this.jobProfile,

        // person2Name: this.m2n,
        // person2Male: this.m1,
        // person2JP: this.jobProfile1,
      
        // dSweeping: this.Sweeping,
        // dVacuuming: this.Vacuuming,
        // dWashing_dishes: this.Washing_dishes,
        // dFeeding_pets: this.Feeding_pets,
        // dDoing_laundry: this.Doing_laundry,
        // dPreparing_meals: this.Preparing_meals,
        // dCleaning_bathrooms: this.Cleaning_bathrooms,
        // dDusting: this.Dusting,

        // wWashing_bedding: this.Washing_bedding,
        // wMopping_floors: this.Mopping_floors,
        // wWatering_plants: this.Watering_plants,
        // wMowing_the_lawn: this.Mowing_the_lawn,
        // wWeeding_the_garden: this.Weeding_the_garden,
        // wTaking_out_the_trash: this.Taking_out_the_trash,
        // wWash_the_car: this.Wash_the_car,

        // xmWashing_windows: this.Washing_windows,
        // xmBathing_pets: this.Bathing_pets,
        // xmClean_refrigerator: this.Clean_refrigerator,
        // xmChange_air_filters: this.Change_air_filters,
        // xmClean_blinds: this.Clean_blinds,
        // xmVacuum_curtains: this.Vacuum_curtains

      // }).then((data)=> {
      //   this.rt.navigate(['deshboard']);
      // }).catch((err)=> {
      //   console.log(err)
      // });

      
    //  } else if(this.family == "3"){
    //   firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

    //     person1Name: this.m1n,
    //     person1Male: this.m,
    //     person1JP: this.jobProfile,

    //     person2Name: this.m2n,
    //     person2Male: this.m1,
    //     person2JP: this.jobProfile1,

    //     person3Name: this.m3n,
    //     person3Male: this.m2,
    //     person3JP: this.jobProfile2,
      
    //     dSweeping: this.Sweeping,
    //     dVacuuming: this.Vacuuming,
    //     dWashing_dishes: this.Washing_dishes,
    //     dFeeding_pets: this.Feeding_pets,
    //     dDoing_laundry: this.Doing_laundry,
    //     dPreparing_meals: this.Preparing_meals,
    //     dCleaning_bathrooms: this.Cleaning_bathrooms,
    //     dDusting: this.Dusting,

    //     wWashing_bedding: this.Washing_bedding,
    //     wMopping_floors: this.Mopping_floors,
    //     wWatering_plants: this.Watering_plants,
    //     wMowing_the_lawn: this.Mowing_the_lawn,
    //     wWeeding_the_garden: this.Weeding_the_garden,
    //     wTaking_out_the_trash: this.Taking_out_the_trash,
    //     wWash_the_car: this.Wash_the_car,

    //     xmWashing_windows: this.Washing_windows,
    //     xmBathing_pets: this.Bathing_pets,
    //     xmClean_refrigerator: this.Clean_refrigerator,
    //     xmChange_air_filters: this.Change_air_filters,
    //     xmClean_blinds: this.Clean_blinds,
    //     xmVacuum_curtains: this.Vacuum_curtains

    //   }).then((data)=> {
    //     this.rt.navigate(['deshboard']);
    //   }).catch((err)=> {
    //     console.log(err)
    //   });
    //  }  else if(this.family == "4"){
    //   firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

    //     person1Name: this.m1n,
    //     person1Male: this.m,
    //     person1JP: this.jobProfile,

    //     person2Name: this.m2n,
    //     person2Male: this.m1,
    //     person2JP: this.jobProfile1,

    //     person3Name: this.m3n,
    //     person3Male: this.m2,
    //     person3JP: this.jobProfile2,

    //     person4Name: this.m4n,
    //     person4Male: this.m3,
    //     person4JP: this.jobProfile3,
      
    //     dSweeping: this.Sweeping,
    //     dVacuuming: this.Vacuuming,
    //     dWashing_dishes: this.Washing_dishes,
    //     dFeeding_pets: this.Feeding_pets,
    //     dDoing_laundry: this.Doing_laundry,
    //     dPreparing_meals: this.Preparing_meals,
    //     dCleaning_bathrooms: this.Cleaning_bathrooms,
    //     dDusting: this.Dusting,

    //     wWashing_bedding: this.Washing_bedding,
    //     wMopping_floors: this.Mopping_floors,
    //     wWatering_plants: this.Watering_plants,
    //     wMowing_the_lawn: this.Mowing_the_lawn,
    //     wWeeding_the_garden: this.Weeding_the_garden,
    //     wTaking_out_the_trash: this.Taking_out_the_trash,
    //     wWash_the_car: this.Wash_the_car,

    //     xmWashing_windows: this.Washing_windows,
    //     xmBathing_pets: this.Bathing_pets,
    //     xmClean_refrigerator: this.Clean_refrigerator,
    //     xmChange_air_filters: this.Change_air_filters,
    //     xmClean_blinds: this.Clean_blinds,
    //     xmVacuum_curtains: this.Vacuum_curtains

    //   }).then((data)=> {
    //     this.rt.navigate(['deshboard']);
    //   }).catch((err)=> {
    //     console.log(err)
    //   });
    //  } else if(this.family == "5"){
    //   firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

    //     person1Name: this.m1n,
    //     person1Male: this.m,
    //     person1JP: this.jobProfile,

    //     person2Name: this.m2n,
    //     person2Male: this.m1,
    //     person2JP: this.jobProfile1,

    //     person3Name: this.m3n,
    //     person3Male: this.m2,
    //     person3JP: this.jobProfile2,

    //     person4Name: this.m4n,
    //     person4Male: this.m3,
    //     person4JP: this.jobProfile3,

    //     person5Name: this.m5n,
    //     person5Male: this.m4,
    //     person5JP: this.jobProfile4,
      
    //     dSweeping: this.Sweeping,
    //     dVacuuming: this.Vacuuming,
    //     dWashing_dishes: this.Washing_dishes,
    //     dFeeding_pets: this.Feeding_pets,
    //     dDoing_laundry: this.Doing_laundry,
    //     dPreparing_meals: this.Preparing_meals,
    //     dCleaning_bathrooms: this.Cleaning_bathrooms,
    //     dDusting: this.Dusting,

    //     wWashing_bedding: this.Washing_bedding,
    //     wMopping_floors: this.Mopping_floors,
    //     wWatering_plants: this.Watering_plants,
    //     wMowing_the_lawn: this.Mowing_the_lawn,
    //     wWeeding_the_garden: this.Weeding_the_garden,
    //     wTaking_out_the_trash: this.Taking_out_the_trash,
    //     wWash_the_car: this.Wash_the_car,

    //     xmWashing_windows: this.Washing_windows,
    //     xmBathing_pets: this.Bathing_pets,
    //     xmClean_refrigerator: this.Clean_refrigerator,
    //     xmChange_air_filters: this.Change_air_filters,
    //     xmClean_blinds: this.Clean_blinds,
    //     xmVacuum_curtains: this.Vacuum_curtains

    //   }).then((data)=> {
    //     this.rt.navigate(['deshboard']);
    //   }).catch((err)=> {
    //     console.log(err)
    //   });
    //  } else if(this.family == "6"){
    //   firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

    //     person1Name: this.m1n,
    //     person1Male: this.m,
    //     person1JP: this.jobProfile,

    //     person2Name: this.m2n,
    //     person2Male: this.m1,
    //     person2JP: this.jobProfile1,

    //     person3Name: this.m3n,
    //     person3Male: this.m2,
    //     person3JP: this.jobProfile2,

    //     person4Name: this.m4n,
    //     person4Male: this.m3,
    //     person4JP: this.jobProfile3,

    //     person5Name: this.m5n,
    //     person5Male: this.m4,
    //     person5JP: this.jobProfile4,

    //     person6Name: this.m6n,
    //     person6Male: this.m5,
    //     person6JP: this.jobProfile5,
      
    //     dSweeping: this.Sweeping,
    //     dVacuuming: this.Vacuuming,
    //     dWashing_dishes: this.Washing_dishes,
    //     dFeeding_pets: this.Feeding_pets,
    //     dDoing_laundry: this.Doing_laundry,
    //     dPreparing_meals: this.Preparing_meals,
    //     dCleaning_bathrooms: this.Cleaning_bathrooms,
    //     dDusting: this.Dusting,

    //     wWashing_bedding: this.Washing_bedding,
    //     wMopping_floors: this.Mopping_floors,
    //     wWatering_plants: this.Watering_plants,
    //     wMowing_the_lawn: this.Mowing_the_lawn,
    //     wWeeding_the_garden: this.Weeding_the_garden,
    //     wTaking_out_the_trash: this.Taking_out_the_trash,
    //     wWash_the_car: this.Wash_the_car,

    //     xmWashing_windows: this.Washing_windows,
    //     xmBathing_pets: this.Bathing_pets,
    //     xmClean_refrigerator: this.Clean_refrigerator,
    //     xmChange_air_filters: this.Change_air_filters,
    //     xmClean_blinds: this.Clean_blinds,
    //     xmVacuum_curtains: this.Vacuum_curtains

    //   }).then((data)=> {
    //     this.rt.navigate(['deshboard']);
    //   }).catch((err)=> {
    //     console.log(err)
    //   });
    //  } else{

    //   firebase.firestore().collection(firebase.auth().currentUser.email).doc(this.city).collection(this.family).add({

    //     person1Name: this.m1n,
    //     person1Male: this.m,
    //     person1JP: this.jobProfile,

    //     person2Name: this.m2n,
    //     person2Male: this.m1,
    //     person2JP: this.jobProfile1,

    //     person3Name: this.m3n,
    //     person3Male: this.m2,
    //     person3JP: this.jobProfile2,

    //     person4Name: this.m4n,
    //     person4Male: this.m3,
    //     person4JP: this.jobProfile3,

    //     person5Name: this.m5n,
    //     person5Male: this.m4,
    //     person5JP: this.jobProfile4,

    //     person6Name: this.m6n,
    //     person6Male: this.m5,
    //     person6JP: this.jobProfile5,

    //     person7Name: this.m7n,
    //     person7Male: this.m6,
    //     person7JP: this.jobProfile6,
      
    //     dSweeping: this.Sweeping,
    //     dVacuuming: this.Vacuuming,
    //     dWashing_dishes: this.Washing_dishes,
    //     dFeeding_pets: this.Feeding_pets,
    //     dDoing_laundry: this.Doing_laundry,
    //     dPreparing_meals: this.Preparing_meals,
    //     dCleaning_bathrooms: this.Cleaning_bathrooms,
    //     dDusting: this.Dusting,

    //     wWashing_bedding: this.Washing_bedding,
    //     wMopping_floors: this.Mopping_floors,
    //     wWatering_plants: this.Watering_plants,
    //     wMowing_the_lawn: this.Mowing_the_lawn,
    //     wWeeding_the_garden: this.Weeding_the_garden,
    //     wTaking_out_the_trash: this.Taking_out_the_trash,
    //     wWash_the_car: this.Wash_the_car,

    //     xmWashing_windows: this.Washing_windows,
    //     xmBathing_pets: this.Bathing_pets,
    //     xmClean_refrigerator: this.Clean_refrigerator,
    //     xmChange_air_filters: this.Change_air_filters,
    //     xmClean_blinds: this.Clean_blinds,
    //     xmVacuum_curtains: this.Vacuum_curtains

      // }).then((data)=> {
      //   this.rt.navigate(['deshboard']);
      // }).catch((err)=> {
      //   console.log(err)
      // });

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


    check(){
      if(this.Sweeping == false){
        this.works.push('Sweeping');
      }

      if(this.Vacuuming == false){
        this.works.push('Vacuuming');
      }

      if(this.Washing_dishes == false){
        this.works.push('Washing_dishes');
      }

      if(this.Feeding_pets == false){
        this.works.push('Feeding_pets');
      }

      if(this.Doing_laundry == false){
        this.works.push('Doing_laundry');
      }

      if(this.Preparing_meals == false){
        this.works.push('Preparing_meals');
      }

      if(this.Cleaning_bathrooms == false){
        this.works.push('Cleaning_bathrooms');
      }

      if(this.Dusting == false){
        this.works.push('Dusting');
      }

      if(this.Washing_bedding == false){
        this.works.push('Washing_bedding');
      }

      if(this.Mopping_floors == false){
        this.works.push('Mopping_floors');
      }

      if(this.Watering_plants == false){
        this.works.push('Watering_plants');
      }

      if(this.Mowing_the_lawn == false){
        this.works.push('Mowing_the_lawn');
      }

      if(this.Weeding_the_garden == false){
        this.works.push('Weeding_the_garden');
      }

      if(this.Taking_out_the_trash == false){
        this.works.push('Taking_out_the_trash');
      }

      if(this.Wash_the_car == false){
        this.works.push('Wash_the_car');
      }

      if(this.Washing_windows == false){
        this.works.push('Washing_windows');
      }

      if(this.Bathing_pets == false){
        this.works.push('Bathing_pets');
      }

      if(this.Clean_refrigerator == false){
        this.works.push('Clean_refrigerator');
      }

      if(this.Change_air_filters == false){
        this.works.push('Change_air_filters');
      }

      if(this.Clean_blinds == false){
        this.works.push('Clean_blinds');
      }

      if(this.Vacuum_curtains == false){
        this.works.push('Vacuum_curtains');
      }
    }
}
