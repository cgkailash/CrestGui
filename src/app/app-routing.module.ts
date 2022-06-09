import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateActionListComponent } from './corporate-action-list/corporate-action-list.component';
import { CorporateActionComponent } from './corporate-action/corporate-action.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridTableComponent } from './grid-table/grid-table.component';
import { LoginComponent } from './login/login.component';
import { SecuritySelectComponent } from './security-select/security-select.component';
import { SettlementPerformanceComponent } from './settlement-performance/settlement-performance.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  // { path: '**', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settlement', component: SettlementPerformanceComponent, canActivate: [AuthGuard]},
  { path: 'corporate-action', component: CorporateActionComponent, canActivate: [AuthGuard] },
  { path: 'corporate-action-list', component: CorporateActionListComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'grid-table', component: GridTableComponent, canActivate: [AuthGuard] },
  { path: 'security-select', component: SecuritySelectComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
