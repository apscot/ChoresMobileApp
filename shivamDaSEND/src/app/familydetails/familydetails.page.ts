import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-familydetails',
  templateUrl: './familydetails.page.html',
  styleUrls: ['./familydetails.page.scss'],
})
export class FamilydetailsPage implements OnInit {

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

  constructor( private nativeStorage: NativeStorage, private toastCtrl:ToastController, private rt:Router) { 
   
  }

  ngOnInit() {
    this.nativeStorage.getItem('config')
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
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  },
        p2: {M1Name: this.m1Name, M1male: this.m1,  },
      }).then(() => {
          this.rt.navigate(['member-details']);
        });
    } else if(this.family == "3"){
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m, },
        p2: {M1Name: this.m1Name, M1male: this.m1, }, 
        p3: {M2Name: this.m2Name, M2male: this.m2, }
      }).then(() => {
          this.rt.navigate(['member-details']);
        });
    } else if(this.family == "4"){
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  }, 
        p2: {M1Name: this.m1Name, M1male: this.m1, }, 
        p3: {M2Name: this.m2Name, M2male: this.m2, }, 
        p4: {M3Name: this.m3Name, M3male: this.m3, }
      }).then(() => {
          this.rt.navigate(['member-details']);
        });
    } else if(this.family == "5"){
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  },
        p2: {M1Name: this.m1Name, M1male: this.m1,  },
        p3: {M2Name: this.m2Name, M2male: this.m2,  },
        p4: {M3Name: this.m3Name, M3male: this.m3,  }, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  }
      }).then(() => {
          this.rt.navigate(['member-details']);
        });
    } else if(this.family == "6"){
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  },
        p2: {M1Name: this.m1Name, M1male: this.m1,  },
        p3: {M2Name: this.m2Name, M2male: this.m2,  },
        p4: {M3Name: this.m3Name, M3male: this.m3,  }, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  },
        p6: {M5Name: this.m5Name, M5male: this.m5,  }
    }).then(() => {
          this.rt.navigate(['member-details']);
        });
    } else {
      this.nativeStorage.setItem('config', {Family: this.family,City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  },
        p3: {M2Name: this.m2Name, M2male: this.m2,  },
        p4: {M3Name: this.m3Name, M3male: this.m3,  }, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  },
        p6: {M5Name: this.m5Name, M5male: this.m5,  },
        p7: {M6Name: this.m6Name, M6male: this.m6,  }
    }).then(() => {
          this.rt.navigate(['member-details']);
        });
    }
  }

  onetapM(){
    this.m =! this.m;
    // this.f = false;
  }
  onetapF(){
    this.m = false;
    // this.f = true;
  }

  twotapM(){
    this.m1 =! this.m1;
    // this.f1 = false;
  }
  twotapF(){
    this.m1 = false;
    // this.f1 = true;
  }

  tretapM(){
    this.m2 =! this.m2;
    // this.f2 = false;
  }
  tretapF(){
    this.m2 = false;
    // this.f2 = true;
  }

  fortapM(){
    this.m3 =! this.m3;
    // this.f3= false;
  }
  fortapF(){
    this.m3 = false;
    // this.f3 = true;
  }
  fivtapM(){
    this.m4 =! this.m4;
    // this.f4 = false;
  }
  fivtapF(){
    this.m4 = false;
    // this.f4 = true;
  }
  sixtapM(){
    this.m5 =! this.m5;
    // this.f5 = false;
  }
  sixtapF(){
    this.m5 = false;
    // this.f5 = true;
  }
  sevtapM(){
    this.m6 =! this.m6;
    // this.f6 = false;
  }
  sevtapF(){
    this.m6 = false;
    // this.f6 = true;
  }
}
