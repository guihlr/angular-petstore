import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parameters } from '../interfaces/parameters';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private http: HttpClient) { }

  getParameters(): Observable<Parameters[]> {
    return new Observable<Parameters[]>(observer => {
      // import do enviroment para add url da api
      this.http.get<Parameters[]>(`${environment.apiUrl}v1/parameters`).subscribe(parameters => {
        observer.next(parameters);
        observer.complete();
      },
        // se der erro na req, ira ser chamado esse callback
        () => {
          observer.error('error_on_getParameteres');
          observer.complete();
        }
      );
    });
  }


}
