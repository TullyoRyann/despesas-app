import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Serializer } from '../interface/serializer';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    protected httpClient: HttpClient,
    protected _baseUrl: string,
    protected _endpointUrl: string,
    protected _serializer: Serializer
  ) { }

  insert(model: any): Observable<any> {
    return this.httpClient.post(this.resourceBaseUrl, model);
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
