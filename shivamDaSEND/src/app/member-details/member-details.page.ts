import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.page.html',
  styleUrls: ['./member-details.page.scss'],
})
export class MemberDetailsPage implements OnInit {
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


  constructor(private navCtrl:NavController, private nativeStorage: NativeStorage, private rt:Router) { }

  ngOnInit() {
    this.nativeStorage.getItem('config')
    .then(
      (data) => {
        this.family = data.Family;
        this.city = data.City;

        console.log(this.family);
        
        if(this.family == "2"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;
        }
     else   if(this.family == "3"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;

        this.m2Name = data.p3.M2Name;
        this.m2 = data.p3.M2male;
        // this.f2 = data.p3.M2female;
        }

     else   if(this.family == "4"){

          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;

          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;

          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;
          }
          
          
   else     if(this.family == "5"){
          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;

          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;

          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;

          
        this.m4Name = data.p5.M4Name;
        this.m4 = data.p5.M4male;
        // this.f4 = data.p5.M4female;
          }

      else    if(this.family == "6"){
            this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;

            this.m2Name = data.p3.M2Name;
            this.m2 = data.p3.M2male;
            // this.f2 = data.p3.M2female;
  
            this.m3Name = data.p4.M3Name;
            this.m3 = data.p4.M3male;
            // this.f3 = data.p4.M3female;
  
            
          this.m4Name = data.p5.M4Name;
          this.m4 = data.p5.M4male;
          // this.f4 = data.p5.M4female;

          this.m5Name = data.p6.M5Name;
          this.m5 = data.p6.M5male;
          // this.f5 = data.p6.M5female;
            }
       

        else{

          this.mName = data.p1.MName;
          this.m = data.p1.Mmale;
          // this.f = data.p1.Mfemale;
  
          this.m1Name = data.p2.M1Name;
          this.m1 = data.p2.M1male;
          // this.f1 = data.p2.M1female;

          this.m2Name = data.p3.M2Name;
          this.m2 = data.p3.M2male;
          // this.f2 = data.p3.M2female;

          this.m3Name = data.p4.M3Name;
          this.m3 = data.p4.M3male;
          // this.f3 = data.p4.M3female;

          
        this.m4Name = data.p5.M4Name;
        this.m4 = data.p5.M4male;
        // this.f4 = data.p5.M4female;

        this.m5Name = data.p6.M5Name;
        this.m5 = data.p6.M5male;
        // this.f5 = data.p6.M5female;

        this.m6Name = data.p7.M6Name;
        this.m6 = data.p7.M6male;
        // this.f6 = data.p7.M6female;
        }
        console.log(data,this.family);
      },
      error => console.error(error)
    );
  }

  next(){

    if(this.family == "2"){
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
        p2: {M1Name: this.m1Name, M1male: this.m1, Jp1: this.jobProfile1},
      }).then(() => {
          this.rt.navigate(['dodont']);
        });
    } else if(this.family == "3"){
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
        p2: {M1Name: this.m1Name, M1male: this.m1, Jp1: this.jobProfile1}, 
        p3: {M2Name: this.m2Name, M2male: this.m2, Jp2: this.jobProfile2}
      }).then(() => {
          this.rt.navigate(['dodont']);
        });
    } else if(this.family == "4"){
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile}, 
        p2: {M1Name: this.m1Name, M1male: this.m1,  Jp1: this.jobProfile1}, 
        p3: {M2Name: this.m2Name, M2male: this.m2,  Jp2: this.jobProfile2}, 
        p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}
      }).then(() => {
          this.rt.navigate(['dodont']);
        });
    } else if(this.family == "5"){
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
        p2: {M1Name: this.m1Name, M1male: this.m1,  Jp1: this.jobProfile1},
        p3: {M2Name: this.m2Name, M2male: this.m2,  Jp2: this.jobProfile2},
        p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4}
      }).then(() => {
          this.rt.navigate(['dodont']);
        });
    } else if(this.family == "6"){
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
        p2: {M1Name: this.m1Name, M1male: this.m1,  Jp1: this.jobProfile1},
        p3: {M2Name: this.m2Name, M2male: this.m2,  Jp2: this.jobProfile2},
        p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4},
        p6: {M5Name: this.m5Name, M5male: this.m5,  Jp5: this.jobProfile5}
    }).then(() => {
          this.rt.navigate(['dodont']);
        });
    } else {
      this.nativeStorage.setItem('config', {Family: this.family, City: this.city,
        p1: {MName: this.mName, Mmale: this.m,  Jp: this.jobProfile},
        p2: {M1Name: this.m1Name, M1male: this.m1,  Jp1: this.jobProfile1},
        p3: {M2Name: this.m2Name, M2male: this.m2,  Jp2: this.jobProfile2},
        p4: {M3Name: this.m3Name, M3male: this.m3,  Jp3: this.jobProfile3}, 
        p5: {M4Name: this.m4Name, M4male: this.m4,  Jp4: this.jobProfile4},
        p6: {M5Name: this.m5Name, M5male: this.m5,  Jp5: this.jobProfile5},
        p7: {M6Name: this.m6Name, M6male: this.m6,  Jp6: this.jobProfile6}
    }).then(() => {
          this.rt.navigate(['dodont']);
        });
    }
  }

}
