import { FooterComponent } from './../../components/footer/footer.component';
import { ProductsServiceMock } from './../../mocks/products-mocks';
import { ProductsService } from './../../services/products.service';
import { ProductItemComponent } from './../../components/product-item/product-item.component';
import { CategoriesFeaturedComponent } from './../../components/categories-featured/categories-featured.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { MockComponent } from 'ng-mocks';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations:
        [DashboardComponent,
          MockComponent(CategoriesFeaturedComponent),
          MockComponent(ProductItemComponent)
        ],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
