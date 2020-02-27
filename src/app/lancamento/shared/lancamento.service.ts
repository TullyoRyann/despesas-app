import { Injectable } from '@angular/core';
import { CrudService } from '@app/shared/service/crud.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { HandleErrorService } from '@app/shared/service/handle-error.service';
import { LancamentoSerializer } from './lancamento-serializer';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends CrudService {

  constructor(
    protected httpClient: HttpClient,
    protected handleErrorService: HandleErrorService
  ) {
    super(httpClient, environment.apiUrl, '/lancamentos', new LancamentoSerializer())
  }

}
