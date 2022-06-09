import { Component, OnInit } from '@angular/core';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiSearching  } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-grid-table',
  templateUrl: './grid-table.component.html',
  styleUrls: ['./grid-table.component.css']
})
export class GridTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  columns: Array<GuiColumn> = [{
		header: 'Participant ID',
		field: 'participantId'
	}, {
		header: 'Bank ID',
		field: 'bankId'
	}, {
		header: 'Ccy',
		field: 'Ccy'
	}, {
		header: 'Payment Type',
		field: 'paymentType'
	}, {
		header: 'CMA Name',
		field: 'cmaName'
	}, {
		header: 'Cash Position',
		field: 'cashPosition'
	}, {
		header: 'Time Stamp',
		field: 'timeStamp'
	}, {
		header: 'Cap Name',
		field: 'capName'
	}, {
		header: 'CMA Status',
		field: 'cmaStatus'
	}];

	// source: Array<any>;

	paging: GuiPaging = {
		enabled: true,
		page: 1,
		pageSize: 8,
		pageSizes: [8, 25, 50],
		pagerTop: true,
		pagerBottom: true,
		display: GuiPagingDisplay.BASIC
	};

  searching: GuiSearching = {
		enabled: true,
		placeholder: 'Search here',
		// phrase: 'man',
		highlighting: true
	};

  source: Array<any> = [
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    {
      participantId: 'USER1',
      bankId: 'BANK1',
      Ccy: 'GBP',
      paymentType: 'Central',
      cmaName: 'CMA002',
      cashPosition: '3,029,989',
      timeStamp: '06:32:20',
      capName: 'CAPNAME2',
      cmaStatus: 'Active',
    },
    
  ];

}
