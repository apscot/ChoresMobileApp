import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DodontclassService {



  
    
    status : boolean;
    value : number;
    isMale: boolean;
    name: string;

    constructor(status : boolean,value : number,isMale: boolean,name: string) {
      this.status = status;
      this.value = value;
      this.isMale = isMale;
      this.name = name;
    }
}
