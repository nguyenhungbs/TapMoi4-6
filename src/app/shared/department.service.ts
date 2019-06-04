import { Injectable } from '@angular/core';
import { Department } from './deparment.model';
import { AppConstants } from './root.common';
import { ApiCommonService } from './apicommon.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  _getById: string;
  _deleteOne: string;
  _search: string;
  _save: string;
  _departments: Department[];
  _department: Department;
  itemIndex: number;
  indexId: number;

  constructor(private _apiCommonService: ApiCommonService) {
    this._getById = AppConstants.departmentGetById;
    this._deleteOne = AppConstants.departmentDeleteOne;
    this._search = AppConstants.departmentSearch;
    this._save = AppConstants.departmentSave;
  }

  DepartmentById(id: number) {
    console.log("serupdate", this._apiCommonService.getRequestByParamSpecial(this._getById, id));
    this._apiCommonService.getRequestByParamSpecial(this._getById, id);
  }

  PaginationDepartment() {
    this._apiCommonService.postRequest(this._search,
      { pageIndex: 1, pageSize: 10 }, null)
      .subscribe(res => {
        console.log("res", res.data);
        this._departments = res.data.records;
        console.log("_departments", this._departments);
      });
  }

  RefreshList() {
    this.PaginationDepartment();
  }

  AddDepartment(data: any) {
    this._apiCommonService.postRequest(this._save, data, null)
      .subscribe(res => {
        console.log("res.success", res.message);
      });
  }

  UpdateDepartment(indexId: number, data: any) {
    this._apiCommonService.postRequest(this._save, data, null)
      .subscribe(res => {
        console.log("res.success", res.success);
      });
  }
}
