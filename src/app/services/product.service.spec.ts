import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AnimalType, Product } from '../interfaces/product';
import { ProductsServiceMock } from '../mocks/products-mocks';

import { ProductService } from './product.service';
import { ProductsService } from './products.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        }
      ]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductService);
  });

  it('should get product', () => {
    service.getProduct('ID1').subscribe(product => {
      expect(product.name).toEqual('Ração Seca');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1');

    expect(req.request.method).toEqual('GET');

    // Se vocẽ tiver um produto declarado no escopo do serviço ou em um arquivo de mock utilize ele
    const product: Product = {
      name: 'Ração Seca',
      description: 'Ração para cachorro',
      value: 158.9,
      promotional_value: 143.07,
      featured_image: '',
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 8,
      installment_available: true,
      installment_count: 3,
      featured: true,
      category: 'ração',
      subcategory: 'ração seca',
      animal_type: AnimalType.Dog,
      created_at: '2021-04-11 14:22:17.916440+00:00',
      id: 'ID1',
      url: '',
      status: 'active'
    }

    req.flush(product);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
