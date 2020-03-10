import { Component, OnInit } from '@angular/core';
import { ContaService } from '../shared/conta.service';
import { Conta } from '../shared/conta';
import { CrudListing } from '@app/shared/component/crud/crud-listing/crud-listing';
import { Router } from '@angular/router';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-conta-listing',
  templateUrl: './conta-listing.component.html',
  styleUrls: ['./conta-listing.component.css']
})

export class ContaListingComponent extends CrudListing {

  protected contas: Conta[];

  constructor(
    protected router: Router,
    protected contaService: ContaService
  ) { super(router, contaService) }

}
