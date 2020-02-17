import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(
    protected toastService: ToastService
  ) { }
  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      if (err.status && err.status == 400) {
        if (err.error instanceof Array) {
          const e = err.error.map((e) => {
            return { severity: 'error', summary: e.campo, detail: e.erro };
          })
          this.toastService.showMultipleError(e);
        }
      }
      return of(result as T);
    };
  }
}
