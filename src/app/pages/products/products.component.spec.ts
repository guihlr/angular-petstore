import { ProductsService } from './../../services/products.service';
import { Products } from './../../interfaces/products';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductsComponent } from './products.component';
import { ProductsServiceMock } from 'src/app/mocks/products-mocks';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show products in html', () => {
    fixture.nativeElement;
    const productItem = document.getElementsByTagName('app-product-item');
    expect(productItem.length).toEqual(1);
  });

  it('should test component title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('div h2').textContent).toContain(
      'Lista de Produtos'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
