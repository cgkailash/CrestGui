import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import mdf from './shared/mdf.json';

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctionService {

  mdfJSON : any = mdf;

  constructor(private router : Router) { }

  covertJsonToMFD(formData:any, code:any){
    let usersfieldArray:any = [];
    this.mdfJSON[code].forEach((element:any,i:any)=>{
      console.log(element,i);
      Object.values(element).forEach((ele:any)=>{
      Object.keys(formData).forEach((e:any,i:any)=>{
        if(ele == e){
          usersfieldArray.push(formData[e]);
        }
      });
      });
    });
    let userFilteredData = "";
    userFilteredData = Object.values(usersfieldArray).join("\t");
    return userFilteredData;
  }


  covertMFDToJson(mdfData:any, code:any){
    let usersfieldArray:any = [];
    let array = mdfData.split(" ");
    let arrayData = array.filter(function (el:any) {
      return el != "";
    });
    arrayData.forEach((arr: any, i: any) => {
      this.mdfJSON[code].forEach((element: any, index: any) => {
        console.log(element, index);
        if(index == i){
          Object.keys(element).forEach((ele:any)=>{
          this.mdfJSON[code][index][ele] = arr;
          })
        }
      });
    });
    console.log("mdfData", this.mdfJSON[code]);
  }

  checkRouting(){
    let urls = '/';
    if(urls === this.router.url ){
      return true;
    }else{
      return false;
    }
  }
  isEmpty(data:any){
    if(data && (data.length === 0 || Object.keys(data).length === 0 || data === undefined)){
       return true;
    }else{
      return false;
    }
  }
}
