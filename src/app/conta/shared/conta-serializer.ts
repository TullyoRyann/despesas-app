import { ContaForm } from './conta.form';
import { ContaRequest } from './conta-request.model';
import { Serializer } from '@app/shared/interface/serializer';

export class ContaSerializer implements Serializer {

  fromFormToRequestModel(form: ContaForm): ContaRequest {
    return new ContaRequest(
      form.get('nome').value,
      form.get('saldoInicial').value
    )
  }

}