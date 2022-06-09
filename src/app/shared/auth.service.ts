import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginValue : boolean = false;

  constructor() { }

  // islogin(value?:any){
  //   this.loginValue = value;
  //   return this.loginValue;
  // }

  isCredentialValid(){
    return true;
  }
}
