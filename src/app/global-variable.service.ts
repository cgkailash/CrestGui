import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  constructor() { }

  userLogin : boolean = false;
  getUserName : string = "";
  saveComponentState : string = "";
  selectedISIN : string = "";
}
