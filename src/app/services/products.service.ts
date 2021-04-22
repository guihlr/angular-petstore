import { environment } from 'src/environments/environment';
import { ProductsHighlights } from './../interfaces/products-highlights';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsGetResponse } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProductsHighlights(): Observable<ProductsHighlights[]> {
    return new Observable<ProductsHighlights[]>((observer) => {
      // importando o enviroment para adicionar a url da aplicação
      this.http
        .get<ProductsHighlights[]>(
          `${environment.apiUrl}v1/products-highlights`
        )
        .subscribe(
          (productsHighlights) => {
            observer.next(productsHighlights);
            observer.complete();
            // console.log(productsHighlights[0].name);
          },
          // se der algum erro na req ira ser chamado ese callback
          () => {
            observer.error('error_on_getProductsHighlights');
            observer.complete();
          }
        );
    });
  }

  getProducts(): Observable<ProductsGetResponse> {
    return new Observable<ProductsGetResponse>((observer) => {
      // importando o enviroment da url da api
      this.http
        .get<ProductsGetResponse>(`${environment.apiUrl}v1/products`)
        .subscribe(
          (products) => {
            observer.next(products);
            observer.complete();
          },
          (error) => {
            observer.error('error_on_get_products');
            observer.next(error);
            observer.complete();
          }
        );
    });
  }
}
