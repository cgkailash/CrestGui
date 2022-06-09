import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiSearching  } from '@generic-ui/ngx-grid';
import { GlobalFunctionService } from './global-function.service';
import { GlobalVariableService } from './global-variable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'gridTable';

  constructor(public globalVariableService : GlobalVariableService, 
    private route : ActivatedRoute, 
    private router : Router,
    public globalFunctionService : GlobalFunctionService){}


  ngOnInit() {
    this.route;
    this.router;
  }

  

}
