import { Component, OnInit, Input } from '@angular/core';
import { Conta } from '../shared/conta';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from '../shared/conta.service';

@Component({
  selector: 'app-conta-detail',
  templateUrl: './conta-detail.component.html',
  styleUrls: ['./conta-detail.component.css']
})
export class ContaDetailComponent implements OnInit {


  @Input()
  conta: Conta;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private contaService: ContaService
  ) { }

  ngOnInit() {
   this.getConta();
  }

  getConta(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.contaService.get(id).subscribe(conta => {
        this.conta = conta;
      })
    }
  }

  voltar(): void {
    this.router.navigate(['/conta']);
  }

}
