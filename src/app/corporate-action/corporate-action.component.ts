import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVariableService } from '../global-variable.service';
import { products } from './benefits-data';

@Component({
  selector: 'app-corporate-action',
  templateUrl: './corporate-action.component.html',
  styleUrls: ['./corporate-action.component.css']
})
export class CorporateActionComponent implements OnInit {

  public benefitsDataTable: unknown[] = products;

  constructor(
    private router : Router,
    public globalVariableService : GlobalVariableService) { }

  ngOnInit(): void {
  }
  
  public distributionType: Array<string> = [
    "STATIC"
  ];

  public mandatary: Array<string> = [
    "MANDATORY",
    "VOLUNTARY"
  ];

  public type: Array<string> = [
    "RMD"
  ];

  public status: Array<string> = [
    "NEW"
  ];

  public election: Array<string> = [
    "NOT APPLICABLE"
  ];

  public receivingAgent: Array<string> = [
    "REG 1"
  ];

  public dividendType: Array<string> = [
    "NOT APPLICABLE"
  ];

  public grossOrNet: Array<string> = [
    "NOT APPLICABLE"
  ];

  public SRDINEligibleInd: Array<string> = [
    "NOT ELIGIBLE OR NOT SUPPLIED"
  ];

  public confirmationStatus: Array<string> = [
    "CONFIRMED"
  ];
  sendState(){
    this.globalVariableService.saveComponentState = this.router.url;
    this.router.navigate(['/security-select']);
  }



}
