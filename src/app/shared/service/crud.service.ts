import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    protected httpClient: HttpClient,
    protected _baseUrl: string,
    protected _endpointUrl: string
  ) { }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get endpointUrl(): string {
    return this._endpointUrl;
  }

  get resourceBaseUrl(): string {
    return this._baseUrl + this._endpointUrl;
  }

}
