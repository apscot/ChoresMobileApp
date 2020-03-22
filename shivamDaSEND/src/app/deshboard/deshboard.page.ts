import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-deshboard',
  templateUrl: './deshboard.page.html',
  styleUrls: ['./deshboard.page.scss'],
})
export class DeshboardPage implements OnInit {

  getData:any [] = [];
  email:string;
 
  w1:any[] = [];
  w2:any[] = [];
  w3:any[] = [];
  w4:any[] = [];
  w5:any[] = [];
  w6:any[] = [];
  w7:any[] = [];


  p1:boolean = true;
  p2:boolean = true;
  p3:boolean = false;
  p4:boolean = false;
  p5:boolean = false;
  p6:boolean = false;
  p7:boolean = false;

 m1Name:string;
 m2Name:string;
  



  // family:string;
  // city:string;

 
  

  constructor(private rt:Router, private nativeStorage: Storage,private alertCtrl:AlertController, private actr:ActivatedRoute) { 
       
  }

  ngOnInit() {
    this.nativeStorage.get('info').then(data => {
    
      this.m1Name = data.Members[0].Name;
      this.m2Name = data.Members[1].Name;
    });

    this.actr.queryParams.subscribe(data => {
    
      this.w1 = data.w1;
      this.w2 = data.w2;
      console.log(this.w1,this.w2);
    });

  }

  about(){
    this.rt.navigate(['about']);
  }

}
  