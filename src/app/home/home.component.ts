import { Component, OnInit } from '@angular/core';
import { ContaService } from '@app/conta/shared/conta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  saldoAtual: number;

  constructor(
    protected contaService: ContaService
  ) { }

  ngOnInit() {
    this.getSaldoTotal();
  }

  getSaldoTotal(): void {
    this.contaService.getSaldoTotal()
      .subscribe(response => {
        this.saldoAtual = response;
      })
  }

}
