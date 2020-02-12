import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" })
  };

  constructor(private http: HttpClient) { }

  salvarConta(conta: any): Observable<any> {
    return this.http.post("http://localhost:8080/contas", conta, this.httpOptions).pipe(
    );
  } 

}
