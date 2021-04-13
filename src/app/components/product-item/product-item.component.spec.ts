import { AnimalType } from './../../interfaces/products-highlights';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Products } from 'src/app/interfaces/products';

// Produto Mock criado
const product: Products = {
  name: "Product",
  description: "Product",
  value: 204.9,
  promotional_value: 184.41,
  featured_image: 'image_url',
  images: [],
  videos: [],
  rating_stars: 5,
  rating_count: 424,
  status: 'active',
  installment_available: true,
  installment_count: 2,
  featured: true,
  animal_type: AnimalType.Dog,
  category: 'Medicina e Saúde',
  subcategory: 'Antipulgas e Carrapatos',
  url: '/url',
  created_at: '2021-04-12 21:28:35.881119+00:00',
  id: 'EJf7MU4hES59rlLMJrdH'
}

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    // atribuindo o produto na variavel do input product (Simulando a injeção via html com 
    // [product]="product")
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
