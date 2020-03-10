import { HttpParams } from '@angular/common/http';

export class QueryParamsFactory {

  create(obj: object): HttpParams {
    let params = new HttpParams();
    Object.keys(obj).forEach(key => {
      params = params.append(key, obj[key]);
    });
    return params;
  }

}
