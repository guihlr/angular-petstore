import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { AnimalType } from '../interfaces/product';
import { ProductsGetResponse } from '../interfaces/products';

describe('ProductsService', () =>
{
  let service: ProductsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });


  it('should test get products highlights', () =>
  {
    service.getProductsHighlights().subscribe(productsHighlights =>
    {
      expect(productsHighlights.length).toEqual(2);
      expect(productsHighlights[ 0 ].name).toContain('Ração');
    });

    // conferindo qual url foi chamada pelo metodo getProductsHighlights()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights');

    // vericando se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

  });


  it('should test get list products', () =>
  {
    service.getProducts().subscribe(products =>
    {
      expect(products.products.length).toEqual(2);
      expect(products.products[ 0 ].id).toEqual("EJf7MU4hES59rlLMJrdH");
    });
    // Vamos conferir qual url foi chamada pelo metodo getProducts()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products');
    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');
    const productsget: ProductsGetResponse = {
      cursor: '',
      products: [
        {
          name: "Product",
          description: "Product",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "image_url",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,
          installment_available: true,
          installment_count: 2,
          featured: true,
          category: "Medicina e Sa\u00fade",
          subcategory: "Antipulgas e Carrapatos",
          animal_type: AnimalType.Dog,
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hES59rlLMJrdH",
          status: "string"
        },
        {
          name: "Product2",
          description: "Product2",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "image_url",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,
          installment_available: true,
          installment_count: 2,
          featured: true,
          category: "Medicina e Sa\u00fade",
          subcategory: "Antipulgas e Carrapatos",
          animal_type: AnimalType.Dog,
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hES59rlLMJrdH",
          status: 'string'
        }
      ]
    };
    req.flush(productsget);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
