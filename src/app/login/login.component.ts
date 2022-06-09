import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
// import usersData from 'users.json';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariableService } from '../global-variable.service';
// import users from './users.json';
import { GlobalFunctionService } from '../global-function.service';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {    
  
  loading = false;
  submitted = false;
  returnUrl: string = "";
  // usersData : any = users;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private fb : FormBuilder, 
    private globalVariableService : GlobalVariableService,
    private globalFunctionsservice : GlobalFunctionService,
    private authService : AuthService,
    private apiService : ApiService) { }

  loginForm: any = "";

  ngOnInit() {
    this.router.url;
    this.route;
    this.loginForm = this.fb.group({
        userId: ['SSSSSS', [Validators.required, Validators.minLength(6)]],
        operatorRef: ['operatorRef', [Validators.required, Validators.min(6)]],
        participantId: ['', [Validators.required, Validators.min(6)]],
        password: ['password', [Validators.required, Validators.minLength(6)]],
        newPassword: ['', [Validators.required, Validators.min(6)]],
        verifyPassword: ['', [Validators.required, Validators.min(6)]],
        authoriserRef: ['', [Validators.required, Validators.min(6)]],
        authoriserPassword: ['', [Validators.required, Validators.min(6)]],
        
    });
  }  

  onSubmit() {
    // Code to convert json to mdf
    this.globalVariableService.getUserName = this.loginForm.value.operatorRef;
    let userFilteredData = "";
    userFilteredData = this.globalFunctionsservice.covertJsonToMFD(this.loginForm.value, "QLOR");
    console.log("recieving data from service", userFilteredData);
    //convert mdf to json
    let data = "mohammed    salahuddin    mohd123";
    this.globalFunctionsservice.covertMFDToJson(data, "QLOS");
    this.globalVariableService.userLogin = true;

    if(this.loginForm.value){
      let getdata = this.apiService.encryptPassword(this.loginForm.value.operatorRef, this.loginForm.value.password);
      console.log("login-file", getdata);
      if(this.authService.isCredentialValid()){
        this.authService.loginValue = true;
        this.router.navigate(['/dashboard']);
      }else{
        this.authService.loginValue = false;
      }

      // this.apiService.processData(this.loginForm.value, 'QLOR')
      // .subscribe(
      //   data => {
      //     console.log("Success", data);
      //   },
      //   error => console.log("error", error)
      //   )
    }
    
    }
}


