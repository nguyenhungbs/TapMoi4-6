import { Component, OnInit } from '@angular/core';
import { DepartmentAddComponent } from '../deparment-item/department-add.component';
import { DepartmentUpdateComponent } from '../deparment-item/department-update.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/shared/deparment.model';
import { DepartmentService } from 'src/app/shared/department.service';
import { ApiCommonService } from 'src/app/shared/apicommon.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styles: []
})
export class DepartmentsComponent implements OnInit {

  departmentItems: Department[];
  _rowCurrent: Department;
  constructor(private _departmentService: DepartmentService,
    private _apiCommonService: ApiCommonService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.PaginationDepartment();
  }

  PaginationDepartment() {
    this._departmentService.PaginationDepartment();
    this.departmentItems = this._departmentService._departments;
  }

  ResetForm(form?: NgForm) {
  }

  ConfigureDialog(itemIndex?, departmentId?) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { itemIndex, departmentId };
    return dialogConfig;
  }

  OpenAddDialog() {
    this.dialog.open(DepartmentAddComponent, this.ConfigureDialog());
  }

  OpenUpdateDialog() {
    this.dialog.open(DepartmentUpdateComponent, this.ConfigureDialog());
  }

  RowSelected(rowSelected: any) {
    this._rowCurrent = rowSelected;
    console.log(this._rowCurrent);
  }

  DeleteOne() {

  }


}
