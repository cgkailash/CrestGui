import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { HeaderComponent } from './header/header.component';
import { GridTableComponent } from './grid-table/grid-table.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettlementPerformanceComponent } from './settlement-performance/settlement-performance.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CorporateActionComponent } from './corporate-action/corporate-action.component';
import { SecuritySelectComponent } from './security-select/security-select.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { HttpClientModule } from "@angular/common/http";
import { CorporateActionListComponent } from './corporate-action-list/corporate-action-list.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GridTableComponent,
    LoginComponent,
    SettlementPerformanceComponent,
    DashboardComponent,
    CorporateActionComponent,
    SecuritySelectComponent,
    CorporateActionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuiGridModule,
    ReactiveFormsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    GridModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
