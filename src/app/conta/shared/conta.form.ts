import { FormGroup, FormControl, Validators } from '@angular/forms';

export class ContaForm extends FormGroup {

  constructor() {
    super({
      nome: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      saldoInicial: new FormControl(null, [
        Validators.required
      ])
    })
  }

}