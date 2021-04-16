import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });


  it('should test get products highlights', () => {
    service.getProductsHighlights().subscribe(productsHighlights => {
      expect(productsHighlights.length).toEqual(2);
      expect(productsHighlights[0].name).toContain('Ração');
    });

    // conferindo qual url foi chamada pelo metodo getProductsHighlights()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights');

    // vericando se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
