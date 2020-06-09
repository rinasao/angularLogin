import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../app/login/login.component';
import { RegisterComponent } from '../app/register/register.component';
import { EmployeeListComponent } from '../app/employee-list/employee-list.component';
import { from } from 'rxjs';

// import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'employeeList', component: EmployeeListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
