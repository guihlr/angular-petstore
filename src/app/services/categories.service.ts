import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return new Observable<Categories[]>(observer => {
      // Faça o importe do environment para poder adicionar a url da aplicação
      this.http.get<Categories[]>(`${environment.apiUrl}v1/categories`).subscribe(
        categories => {
          observer.next(categories);
          observer.complete();
        },
        () => { // Se der algum erro na requisição ira ser chamado esse callback
          observer.error('error_on_get_categories');
          observer.complete();
        }
      )
    });
  }
}
