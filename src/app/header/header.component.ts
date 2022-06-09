import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalVariableService } from '../global-variable.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = "assets/logo.svg";

  constructor(public globalVariableService : GlobalVariableService,
    private route : ActivatedRoute,
    private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
    console.log("routing", this.route.params, this.router);

  }
  userLogout(){
    this.globalVariableService.userLogin = false;
    this.authService.loginValue = false;

    this.router.navigate(['./login']);
  }
  
  

}
