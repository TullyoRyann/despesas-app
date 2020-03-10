import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '@app/shared/service/crud.service';
import { Observable } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';

@Injectable()
export abstract class CrudListing {

  protected _registerList: [];
  protected _listInitialized = false;

  protected _page: number;
  protected _rows: number;
  public size = 10;
  public totalDataLength: number;

  constructor(
    protected router: Router,
    protected crudService: CrudService
  ) { }

  get(id: number): Observable<any> {
    return this.crudService.get(id);
  }

  list(pageableData): void {
    this.crudService.list(pageableData)
      .subscribe(response => {
        this._registerList = response.data.content;
        this.rows = response.data.pageable
        this.totalDataLength = response.data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent): void {
    this.page =  event.rows ? event.first / event.rows : 0;
    const pageableData: any = {
      page: this.page,
    };
    this.list(pageableData);
  }

  redirectToNewRegistry(): void {
    this.router.navigate(['/cadastrar']);
  }

  get registerList(): [] {
    return this._registerList;
  }

  get listInitialized(): boolean {
    return this._listInitialized;
  }

  set page(value: number) {
    this._page = value;
  }

  get page(): number {
    return this._page;
  }

  set rows(value: number) {
    this._rows = value;
  }

  get rows(): number {
    return this._rows;
  }

}
