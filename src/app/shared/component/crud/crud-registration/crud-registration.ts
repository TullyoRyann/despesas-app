import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { ToastService } from '@app/shared/service/toast.service';
import { CrudService } from '@app/shared/service/crud.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export abstract class CrudRegistration {

  protected abstract form: FormGroup;
  protected abstract redirectToNewRegistry(id: number): void;

  constructor(
    protected router: Router,
    protected service: CrudService,
    protected toastService: ToastService,
  ) { }

  save(): void {
    if (this.form.invalid) {
      return;
    }
    let save = this.addModel();
    save.subscribe(response => {
      this.toastService.success('', "Registro salvo com sucesso.");
      this.redirectToNewRegistry(response.data.id);
    })
  }

  protected addModel(): Observable<any> {
    return this.service.insert(this.service.serializer.fromFormToRequestModel(this.form));
  }

}