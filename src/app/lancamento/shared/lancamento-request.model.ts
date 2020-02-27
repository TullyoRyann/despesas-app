import { TipoLancamento } from './enum/tipo-lancamento.enum';

export class LancamentoRequest {
  constructor(
    public descricao: string,
    public valor: number,
    public tipo: TipoLancamento,
    public idConta: number
  ) { }
}