import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { data } from './corporate-action-list';
import { CellClickEvent, GridComponent } from "@progress/kendo-angular-grid";
import {
  AddEvent,
  CancelEvent,
  EditEvent,
  GridDataResult,
  RemoveEvent,
  SaveEvent,
} from "@progress/kendo-angular-grid";
import { Router } from '@angular/router';
import { GlobalVariableService } from '../global-variable.service';
import { ApiService } from '../api.service';
import { GlobalFunctionService } from '../global-function.service';

@Component({
  selector: 'app-corporate-action-list',
  templateUrl: './corporate-action-list.component.html',
  styleUrls: ['./corporate-action-list.component.css']
})
export class CorporateActionListComponent implements OnInit {
  public gridData: unknown[] = [];
  displayTable : boolean = true;
  tableData = data;

  constructor(
    private router : Router,
    public globalVariableService : GlobalVariableService,
    private apiService : ApiService,
    public globalFunctionService : GlobalFunctionService) { }

  ngOnInit(): void {
    
  }
  
  public category: Array<string> = [
    "FTSE"
  ];

  public addHandler(): void {

  }
  public cellClickHandler({
    isEdited,
    dataItem,
    rowIndex,
  }: CellClickEvent): void {
    console.log("selected isin : ", dataItem.isin);
    this.router.navigate(['/corporate-action']);
  }
  sendState(){
    this.globalVariableService.saveComponentState = this.router.url;
    this.router.navigate(['/security-select']);
  }
  getTableData(){
    this.gridData = this.tableData;
    // this.apiService.corporateListData()
    // .subscribe(
    //   data => {
    //     this.gridData = data;
    //     console.log('corporate action list  for data receving', this.gridData);
    //   },
    //   error => console.log("error", error)
    //   )
  }

}
