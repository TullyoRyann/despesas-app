import { Serializer } from '@app/shared/interface/serializer';
import { LancamentoForm } from './lancamento.form';
import { LancamentoRequest } from './lancamento-request.model';

export class LancamentoSerializer implements Serializer {
  fromFormToRequestModel(form: LancamentoForm): LancamentoRequest {
    return new LancamentoRequest(
      form.get('descricao').value,
      form.get('valor').value,
      form.get('tipo').value.toUpperCase(),
      form.get('conta').value.id,
    )
  }
}