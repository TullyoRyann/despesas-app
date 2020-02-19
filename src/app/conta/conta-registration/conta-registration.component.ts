import { Component, OnInit } from '@angular/core';
import { ContaForm } from '../shared/conta.form'
import { Conta } from '../shared/conta';
import { Router } from '@angular/router';
import { ContaService } from '../shared/conta.service';
import { ToastService } from '@app/shared/service/toast.service';

@Component({
  selector: 'app-conta-registration',
  templateUrl: './conta-registration.component.html',
  styleUrls: ['./conta-registration.component.css']
})
export class ContaRegistrationComponent implements OnInit {

  protected form = new ContaForm();

  constructor(
    private router: Router,
    private contaService: ContaService,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }

  salvar(): void {
    if(this.form.invalid){
      return ;
    }
    let conta = new Conta(this.form.get('nome').value, this.form.get('saldoInicial').value, this.form.get('saldoInicial').value);
    this.contaService.insert(conta).subscribe(response => {
      if(response.data && response.data.id){
        this.toastService.success("Sucesso!", "Saldo salvo");
        this.router.navigate([`/conta/${response.data.id}`]);
      }
    })
  }

}
