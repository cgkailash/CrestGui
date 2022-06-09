import { Component, OnInit } from '@angular/core';
import { products } from './security-data';
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

@Component({
  selector: 'app-security-select',
  templateUrl: './security-select.component.html',
  styleUrls: ['./security-select.component.css']
})
export class SecuritySelectComponent implements OnInit {

  constructor(
    private router : Router, 
    private GlobalVariableService: GlobalVariableService) { }

  ngOnInit(): void {
  }
  public gridData: unknown[] = products;
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
    this.GlobalVariableService.selectedISIN = dataItem.isin;
    console.log("selected isin : ", dataItem.isin);
    this.router.navigate([this.GlobalVariableService.saveComponentState]);
  }


}
