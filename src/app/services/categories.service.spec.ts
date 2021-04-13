import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Categories } from '../interfaces/categories';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CategoriesService);
  });

  it('should test get categories', () => {
    service.getCategories().subscribe(categories => {
      expect(categories.length).toEqual(2);
      expect(categories[0].name).toEqual('Ração');
    });

    // Vamos conferir qual url foi chamada pelo metodo getCategories()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/categories');

    // Aqui verificamos se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

    // Vamos colocar aqui a resposta da requisição
    const categories: Array<Categories> = [
      { id: 'dasdasd', name: 'Ração', description: '', subcategories: ['ração seca'], url: '' },
      { id: 'dasdasd', name: 'Brinquedos', description: '', subcategories: ['pelucia'], url: '' }
    ];
    req.flush(categories);

  });

});
