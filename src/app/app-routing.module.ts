import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './department-facade/departments/departments.component';
import { UsersComponent } from './user-facade/users/users.component';
import { PatientsComponent } from './patient-facade/patients/patients.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'patients', component: PatientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentsComponent, UsersComponent, PatientsComponent]