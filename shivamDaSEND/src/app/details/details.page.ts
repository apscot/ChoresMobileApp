import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

 
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
  

  
  constructor( private nativeStorage: Storage, private toastCtrl:ToastController, private rt:Router) { 
   
  }

  ngOnInit() {
    this.nativeStorage.get('info')
    .then(
      (data) => {
        this.family = data.Family;
        this.city = data.Location;
        console.log(data,this.family);
      },
      error => console.error(error)
    );
  }

  
  next(){

    if(this.family == "2"){
        this.nativeStorage.set('info', {Family: this.family, City: this.city,
          Members:[  
            {Name: this.m1n, Male: this.m1,  Job: this.m1jp},
            {Name: this.m2n, Male: this.m2, Job: this.m2jp}
          ]
        }).then(() => {
            this.rt.navigate(['dodont']);
          });

        }

    // if(this.family == "2"){
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
    //     p2: {m1n: this.m1n, M1male: this.m1, Jp1: this.m1jp},
    //   }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // } else if(this.family == "3"){
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
    //     p2: {m1n: this.m1n, M1male: this.m1, Jp1: this.m1jp}, 
    //     p3: {m2n: this.m2n, M2male: this.m2, Jp2: this.m2jp}
    //   }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // } else if(this.family == "4"){
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile}, 
    //     p2: {m1n: this.m1n, M1male: this.m1,  Jp1: this.m1jp}, 
    //     p3: {m2n: this.m2n, M2male: this.m2,  Jp2: this.m2jp}, 
    //     p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}
    //   }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // } else if(this.family == "5"){
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
    //     p2: {m1n: this.m1n, M1male: this.m1,  Jp1: this.m1jp},
    //     p3: {m2n: this.m2n, M2male: this.m2,  Jp2: this.m2jp},
    //     p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
    //     p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4}
    //   }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // } else if(this.family == "6"){
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
    //     p2: {m1n: this.m1n, M1male: this.m1,  Jp1: this.m1jp},
    //     p3: {m2n: this.m2n, M2male: this.m2,  Jp2: this.m2jp},
    //     p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
    //     p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4},
    //     p6: {M5Name: this.m5Name, M5male: this.m5,  Jp5: this.jobProfile5}
    // }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // } else {
    //   this.nativeStorage.set('config', {Family: this.family, City: this.city,
    //     p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
    //     p2: {m1n: this.m1n, M1male: this.m1,  Jp1: this.m1jp},
    //     p3: {m2n: this.m2n, M2male: this.m2,  Jp2: this.m2jp},
    //     p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
    //     p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4},
    //     p6: {M5Name: this.m5Name, M5male: this.m5,  Jp5: this.jobProfile5},
    //     p7: {M6Name: this.m6Name, M6male: this.m6,  Jp6: this.jobProfile6}
    // }).then(() => {
    //       this.rt.navigate(['dodont']);
    //     });
    // }
  }

  onetapM(){
    this.m1 =true;
    // this.f = false;
  }
  onetapF(){
    this.m1 = false;
    // this.f = true;
  }

  twotapM(){
    this.m2 =true;
    // this.f1 = false;
  }
  twotapF(){
    this.m2 = false;
    // this.f1 = true;
  }

  tretapM(){
    this.m3 =true;
    // this.f2 = false;
  }
  tretapF(){
    this.m3 = false;
    // this.f2 = true;
  }

  fortapM(){
    this.m4 =true;
    // this.f3= false;
  }
  fortapF(){
    this.m4 = false;
    // this.f3 = true;
  }
  fivtapM(){
    this.m5 =true;
    // this.f4 = false;
  }
  fivtapF(){
    this.m5 = false;
    // this.f4 = true;
  }
  sixtapM(){
    this.m6 =true;
    // this.f5 = false;
  }
  sixtapF(){
    this.m6 = false;
    // this.f5 = true;
  }
  sevtapM(){
    this.m7 =true;
    // this.f6 = false;
  }
  sevtapF(){
    this.m7 = false;
    // this.f6 = true;
  }
}
