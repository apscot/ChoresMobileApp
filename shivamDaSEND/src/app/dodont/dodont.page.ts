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


  // seeping:boolean = false;
  
  // Vacuuming:boolean = false;
  // Washing_dishes:boolean = false;
  // Feeding_pets:boolean = false;
  // Doing_laundry:boolean = false;
  // Preparing_meals:boolean = false;
  // Cleaning_bathrooms:boolean = false;
  // Taking_out_the_trash:boolean = false;


  // Washing_bedding:boolean = false;
  // Mopping_floors:boolean = false;
  // Watering_plants:boolean = false;
  // Mowing_the_lawn:boolean = false;
  // Wash_the_car:boolean = false;

  // Washing_windows:boolean =false;
  // Bathing_pets:boolean = false;
  // Clean_refrigerator:boolean =false;
  // Change_air_filters:boolean =false;
  // Vacuum_curtains: boolean = false;

  // Daily
  Sweeping:any = {  
    status : true,
    value : 300,
    isMale: false
  }
  Vacuuming:any = {  
    status : true,
    value : 300,
    isMale: false
  }
  Washing_dishes:any = {  
    status : true,
    value : 500,
    isMale: false
  }
  Feeding_pets:any = {  
    status : true,
    value : 200,
    isMale: true
  }
  Doing_laundry:any = {  
    status : true,
    value : 500,
    isMale: false
  }
  Preparing_meals:any = {  
    status : true,
    value : 1000,
    isMale: false
  }
  Cleaning_bathrooms:any = {  
    status : true,
    value : 500,
    isMale: true
  }
 
 
  //weekly
  Grocery_Shopping :any = {  
    status : true,
    value : 200,
    isMale: true
  }
  
  Washing_bedding:any = {  
    status : true,
    value : 500,
    isMale: false
  }
  Mopping_floors:any = {  
    status : true,
    value : 200,
    isMale: false
  }
  Watering_plants:any = {  
    status : true,
    value : 50,
    isMale: true
  }
  Mowing_the_lawn:any = {  
    status : true,
    value : 80,
    isMale: true
  }
  Taking_out_the_trash:any = {  
    status : true,
    value : 4,
    isMale: true
  } 
  Wash_the_car:any = {  
    status : true,
    value : 250,
    isMale: true
  }
  
  
// monthly
  Washing_windows:any = {  
    status : true,
    value : 200,
    isMale: false
  }
  Bathing_pets:any = {  
    status : true,
    value : 100,
    isMale: true
  }
  Clean_refrigerator:any = {  
    status : true,
    value : 250,
    isMale: false
  }
  Change_air_filters:any = {  
    status : true,
    value : 100,
    isMale: true
  }
  Vacuum_curtains:any = {  
    status : true,
    value : 100,
    isMale: false
  }
  

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
    console.log(this.Sweeping.status);
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
      var jobCheck = false;
      const allWork = [this.work1s, this.work2s];
      if(this.m1 == this.m2){
        this.workDivideForAllMaleOrFemale(divided,allWork);
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
      this.Sweeping.status =! this.Sweeping.status;
    }
    vacu(){
      this.Vacuuming.status =! this.Vacuuming.status;
    }
    WashD(){
      this.Washing_dishes.status =! this.Washing_dishes.status;
    }
    FeedP(){
      this.Feeding_pets.status =! this.Feeding_pets.status;
    }
    Laundry(){
      this.Doing_laundry.status =! this.Doing_laundry.status;
    }
    PreMeals(){
      this.Preparing_meals.status =! this.Preparing_meals.status;
    }
    CleanBathrooms(){
      this.Cleaning_bathrooms.status =! this.Cleaning_bathrooms.status;
    }

    WashBed(){
      this.Washing_bedding.status =! this.Washing_bedding.status;
    }
    MoppFloor(){
      this.Mopping_floors.status =!this.Mopping_floors.status;
    }
    WaterPlant(){
      this.Watering_plants.status =! this.Watering_plants.status;
    }
    MowingLawn(){
      this.Mowing_the_lawn.status =! this.Mowing_the_lawn.status;
    }

    TakingTrash(){
      this.Taking_out_the_trash.status =! this.Taking_out_the_trash.status;
    }
    WashCar(){
      this.Wash_the_car.status =! this.Wash_the_car.status;
    }


    WashWindow(){
      this.Washing_windows.status =! this.Washing_windows.status;
    }
    BathPet(){
      this.Bathing_pets.status =! this.Bathing_pets.status;
    }
    CleanRefrigerator(){
      this.Clean_refrigerator.status = !this.Clean_refrigerator.status;
    }
    AirFilters(){
      this.Change_air_filters.status =! this.Change_air_filters.status;
    }

    VacuumCurtains(){
      this.Vacuum_curtains.status =! this.Vacuum_curtains.status;
    }


    check(){
      if(this.Sweeping.status == false){
        this.works.push('Sweeping');
      }

      if(this.Vacuuming.status == false){
        this.works.push('Vacuuming');
      }

      if(this.Washing_dishes.status == false){
        this.works.push('Washing_dishes');
      }

      if(this.Feeding_pets.status == false){
        this.works.push('Feeding_pets');
      }

      if(this.Doing_laundry.status == false){
        this.works.push('Doing_laundry');
      }

      if(this.Preparing_meals.status == false){
        this.works.push('Preparing_meals');
      }

      if(this.Cleaning_bathrooms.status == false){
        this.works.push('Cleaning_bathrooms');
      }

      if(this.Washing_bedding.status == false){
        this.works.push('Washing_bedding');
      }

      if(this.Mopping_floors.status == false){
        this.works.push('Mopping_floors');
      }

      if(this.Watering_plants.status == false){
        this.works.push('Watering_plants');
      }

      if(this.Mowing_the_lawn.status == false){
        this.works.push('Mowing_the_lawn');
      }

      if(this.Taking_out_the_trash.status == false){
        this.works.push('Taking_out_the_trash');
      }

      if(this.Wash_the_car.status == false){
        this.works.push('Wash_the_car');
      }

      if(this.Washing_windows.status == false){
        this.works.push('Washing_windows');
      }

      if(this.Bathing_pets.status == false){
        this.works.push('Bathing_pets');
      }

      if(this.Clean_refrigerator.status == false){
        this.works.push('Clean_refrigerator');
      }

      if(this.Change_air_filters.status == false){
        this.works.push('Change_air_filters');
      }

      if(this.Vacuum_curtains.status == false){
        this.works.push('Vacuum_curtains');
      }
    }


    workDivideForAllMaleOrFemale(divided,allWork){
      let j=0;
      
        for(let i=0; i<= divided-1; i+= 1){
          //this.work1s.push(this.works[i]);
          allWork[j].push(this.works[i]);
          j++;
          if(j>=allWork.length){
            j=0;
          }
          
         console.log(allWork);
        }
      
    }
}
