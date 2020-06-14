import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  empData;
  allEmpData;
  constructor() {
    this.empData = {};
    this.allEmpData = [];
  }
  setData(Key, value) {
    this.empData[Key] = value;
    this.allEmpData.push(value);
    console.log("emp value is", this.allEmpData);
  }
  getData(Key) {
    return this.allEmpData;
    
  }
}
