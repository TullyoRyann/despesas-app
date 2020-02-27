import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LancamentoForm extends FormGroup {
  constructor() {
    super({
      descricao: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      valor: new FormControl(null, [
        Validators.required
      ]),
      tipo: new FormControl(null, [
        Validators.required
      ]),
      conta: new FormControl(null, [
        Validators.required
      ]),
    })
  }
}