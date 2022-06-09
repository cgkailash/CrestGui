import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { GlobalFunctionService } from '../global-function.service';

@Component({
  selector: 'app-settlement-performance',
  templateUrl: './settlement-performance.component.html',
  styleUrls: ['./settlement-performance.component.css']
})
export class SettlementPerformanceComponent implements OnInit {
  settlementFormData:any = {};
  data = {
    "operId": "TSSS",
    "operVer" : "001",
    "templateId": "CI1933",
    "attributes":{
        "CSSS": ["Enabled"], 
        "CPUS": "Completed", 
        "DSDR": "",
        "CDLY": "CW",
        "SSTS": "14.00.58",
        "SFRX": "14.01.22",
        "SLRX": "14.01.22",
        "SPST": "00.00.00",
        "SFTY": "00.00.00",
        "SDTA": "00.00.00",
        "SDAV": "00.00.00",
        "NBLD": "00.00.00",
        "NDAD": "00.00.00",
        "CPDL": "CW",
        "SPVS": "13.59.37",
        "SPFR": "14.00.52",
        "SPLR": "14.00.22",
        "SSPS": "00.00.00",
        "SPFY": "00.00.00",
        "SPDA": "00.00.00",
        "SPDV": "00.00.00",
        "NPDB": "00.00.00",
        "NPDD": "00.00.00",
        "SUPD": "",
        "NCPU": ""
    }
    }

  constructor(
    private apiService : ApiService,
    public globalFunctionService : GlobalFunctionService) { }

  ngOnInit(): void {
    console.log("settlement component running");
    setTimeout( () => this.settlementFormData = this.data, 1000 )
    // this.apiService.receivingData("","TSSS")
    // .subscribe(
    //   data => {
    //     setTimeout( () => this.settlementFormData = data, 1000 )
    //     // this.settlementFormData = data;
    //     console.log('settlment for data receving', this.settlementFormData);
    //   },
    //   error => console.log("error", error)
    //   )
  }

  public listItems: Array<string> = [
    "Crest",
    "Enabled",
    "Disabled",
    "Closed"
  ];

  isEmptyObject(obj:any) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
