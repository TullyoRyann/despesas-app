import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '@app/shared/service/crud.service';
import { environment } from '@env/environment';

import { HandleErrorService } from '@app/shared/service/handle-error.service';
import { ContaSerializer } from './conta-serializer';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContaService extends CrudService {

  constructor(
    protected httpClient: HttpClient,
    protected handleErrorService: HandleErrorService
  ) {
    super(httpClient, environment.apiUrl, '/contas', new ContaSerializer())
  }

  getSaldoTotal(): Observable<any> {
    return this.httpClient.get(this.baseUrl + this.endpointUrl + '/saldoTotal');
  }

}
