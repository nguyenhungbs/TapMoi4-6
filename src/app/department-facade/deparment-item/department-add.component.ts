import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/deparment.model';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/shared/department.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styles: []
})
export class DepartmentAddComponent implements OnInit {

  formData: Department;
  constructor(private departmentService: DepartmentService,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.formData = {
      id: null,
      name: '',
      description: ''
    };
  }

  AddDepartment() {
    this.departmentService.AddDepartment(this.formData);
  }
}
