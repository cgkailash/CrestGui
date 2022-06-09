import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import JSEncrypt from 'jsencrypt';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _url = "http://localhost:3000/TSSS";
  corporateListUrl = "http://localhost:3000/KCAL";
  // headers= new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*');
    
  constructor(private http : HttpClient) { }

  publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCz1zqQHtHvKczHh58ePiRNgOyiHEx6lZDPlvwBTaHmkNlQyyJ06SIlMU1pmGKxILjT7n06nxG7LlFVUN5MkW/jwF39/+drkHM5B0kh+hPQygFjRq81yxvLwolt+Vq7h+CTU0Z1wkFABcTeQQldZkJlTpyx0c3+jq0o47wIFjq5fwIDAQAB";
  headerjson = [{"operId": ""}];
  // processData(formData: any, operationID : string){
  //   console.log("in service", operationID);
  //   let headers= new HttpHeaders()
  //   .set('content-type', 'application/json')
  //   .set('Access-Control-Allow-Origin', '*')
  //   .set('x-ec-operationID', operationID);
  //   return this.http.post<any>(this._url, formData, { 'headers': headers });
  // }

  receivingData(formData: any, operationID : string){
    console.log("in service", operationID);
    let headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('operId', operationID);
    console.log("headerData",headers);
    return this.http.get<any>(this._url, { 'headers': headers });
  }

  corporateListData(){
    return this.http.get<any>(this.corporateListUrl);
  }
  
  encryptPassword(operatorId:any,password:any){

    let RSAEncrypt = new JSEncrypt();
        RSAEncrypt.setPublicKey(this.publicKey);
        let encryptedPass = RSAEncrypt.encrypt(password);
        const user = {
            "userName": operatorId,
            "password": encryptedPass
        };
        
        console.log(encryptedPass);

        return encryptedPass;
  }

  // requestData(formData: any, operationID : string){
  //   console.log("in service", operationID);
  //   this.headers.set('x-ec-operationID', operationID);
  //   return this.http.get<any>(this._url, { 'headers': this.headers });
  // }
}
