import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '@app/shared/service/crud.service';
import { environment } from '@env/environment';

import { Conta } from './conta';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends CrudService {

  constructor(
    protected httpClient: HttpClient
  ) {
    super(httpClient, environment.apiUrl, '/contas')
  }

  insert(model: Conta): Observable<any> {
    return this.httpClient.post(this.resourceBaseUrl, model);
  }

  get(id: number): Observable<any> {
    return this.httpClient.get(`${this.resourceBaseUrl}/${id}`);
  }

  getSaldoTotal(): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.endpointUrl + '/saldoTotal');
  }

}
