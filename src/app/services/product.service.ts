import { Product } from './../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }

  getProduct(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environment.apiUrl}v1/product/${id}`).subscribe(
        product => {
          observer.next(product);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      );
    });
  }

}
