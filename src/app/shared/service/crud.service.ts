import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '../interface/serializer';

import { Observable } from 'rxjs';
import { QueryParamsFactory } from '../factory/query-params-factory';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  protected queryParamsFactory = new QueryParamsFactory();

  constructor(
    protected httpClient: HttpClient,
    protected _baseUrl: string,
    protected _endpointUrl: string,
    protected _serializer: Serializer
  ) { }

  insert(model: any): Observable<any> {
    return this.httpClient.post(this.resourceBaseUrl, model);
  }

  list(filter: any): Observable<any> {
    let params = this.queryParamsFactory.create(filter);
    return this.httpClient.get(`${this.resourceBaseUrl}/findAll`, { params });
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.resourceBaseUrl}/${id}`);
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get endpointUrl(): string {
    return this._endpointUrl;
  }

  get resourceBaseUrl(): string {
    return this._baseUrl + this._endpointUrl;
  }

  get serializer(): Serializer {
    return this._serializer;
  }

}
