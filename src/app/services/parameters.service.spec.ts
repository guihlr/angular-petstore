import { Parameters } from 'src/app/interfaces/parameters';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ParametersService } from './parameters.service';

describe('ParametersService', () => {
  let service: ParametersService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ParametersService);
  });

  it('should test get parameters', () => {
    service.getParameters().subscribe(parameters => {
      expect(parameters.length).toEqual(2);
      expect(parameters[0].company_name).toEqual('Petstore LTDA');
      console.log(parameters.length, '<<<')
    });

    // conferindo qual url foi chamada pelo metodo getParameters()
    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/parameters');

    // vericando se o protocolo chamado foi GET
    expect(req.request.method).toEqual('GET');

  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
