import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/shared/deparment.model';
import { DepartmentService } from 'src/app/shared/department.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styles: []
})
export class DepartmentUpdateComponent implements OnInit {

  formData: Department;
  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {
    this.formData = {
      id: null,
      name: '',
      description: ''
    };
    this.GetDepartmentInfo(3);
  }

  GetDepartmentInfo(id: number) {
    this._departmentService.DepartmentById(id);
    console.log("update", this._departmentService._department)
    this.formData = this._departmentService._department;
  }

}
