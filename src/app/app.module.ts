import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatTabsModule } from '@angular/material/tabs'
import { MatDialogModule } from '@angular/material/dialog';

import { DepartmentsComponent } from './department-facade/departments/departments.component';
import { UsersComponent } from './user-facade/users/users.component';
import { PatientsComponent } from './patient-facade/patients/patients.component';
import { DepartmentUpdateComponent } from './department-facade/deparment-item/department-update.component';
import { DepartmentAddComponent } from './department-facade/deparment-item/department-add.component';
import { PatientUpdateComponent } from './patient-facade/patient-item/patient-update.component';
import { PatientAddComponent } from './patient-facade/patient-item/patient-add.component';
import { UserAddComponent } from './user-facade/user-item/user-add.component';
import { UserUpdateComponent } from './user-facade/user-item/user-update.component';

import { DepartmentService } from './shared/department.service';
import { UserService } from './shared/user.service';
import { PatientService } from './shared/patient.service';
import { ApiCommonService } from './shared/apicommon.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    DepartmentsComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    PatientsComponent,
    PatientUpdateComponent,
    PatientAddComponent,
    UsersComponent,
    UserAddComponent,
    UserUpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    //MDBBootstrapModule
  ],
  entryComponents: [
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    UserAddComponent,
    UserUpdateComponent,
  ],
  providers: [DepartmentService, UserService, PatientService, ApiCommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
