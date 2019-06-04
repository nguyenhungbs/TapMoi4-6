import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from './root.common';

@Injectable({
  providedIn: 'root'
})
export class ApiCommonService {

  _baseUrl: string;
  constructor(private _httpClient: HttpClient) {
    this._baseUrl = AppConstants.baseURL;
  }

  getRequest(url: string): Observable<any> {
    return this._httpClient.get(url);
  }

  getRequestByParams(url: string, paramInput: any, valueInput: any): Observable<any> {
    let params = new HttpParams().set(paramInput, valueInput);
    return this._httpClient.get(this._baseUrl + url + { params: params });
  }

  getRequestByParamSpecial(url: string, valueInput: any): Observable<any> {
    let params = new HttpParams(valueInput);
    return this._httpClient.get(this._baseUrl + url + "/" + valueInput);
  }

  postRequest(url: string, body: any, params?: any): Observable<any> {
    return this._httpClient.post(this._baseUrl + url, body, this.defineOptions(params));
  }

  putRequest(url: string, body: any, params?: any): Observable<any> {
    return this._httpClient.put(this._baseUrl + url, body, this.defineOptions(params));
  }

  deleteRequest(url: string, body: any, params?: any): Observable<any> {
    return this._httpClient.put(this._baseUrl + url, this.defineOptions(params));
  }

  private defineOptions(params?: any) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: params
    }
  }
}
