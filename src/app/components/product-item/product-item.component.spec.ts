import { MockComponents } from 'ng-mocks';
import { AnimalType } from './../../interfaces/products-highlights';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Products } from 'src/app/interfaces/products';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCard } from '@angular/material/card';

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
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ProductItemComponent,
        MockComponents(
          MatIcon,
          MatCard
        )
      ],
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


  it('should check product name in html', () => {
    const html = fixture.nativeElement;
    const productName = document.querySelector('mat-card .product-name');
    expect(productName?.textContent).toEqual(`${product.name}`);
    // console.log(`${product.name}`)
  });

  //3 - Verificar se o valor original e o valor promocional estão no HTML
  // Crie um teste para conferir se o nome os valores estão presente no HTML
  it('should check product_value in html', () => {
    const html = fixture.nativeElement;
    const productValue = document.querySelector('mat-card .product-value');
    expect(productValue?.textContent).toContain(`${product.value}`);
    // console.log(`${product.value}`)
  });


  it('should check promotional_value in html', () => {
    const html = fixture.nativeElement;
    const promotionalValue = document.querySelector('mat-card .product-promotional_value');
    expect(promotionalValue?.textContent).toContain(`${product.promotional_value}`);
    // console.log(`${product.promotional_value}`)
  });


  it('should show five icon stars', () => {
    const html = fixture.nativeElement;
    // get all mat-icon
    const matIcons = document.getElementsByTagName('mat-icon');
    // check mat-icon count
    expect(matIcons.length).toEqual(5);
    // check first mat-icon
    expect(matIcons[0].textContent?.trim()).toContain('star');
  });


  it('should show stars with 3.5 rating star', () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 3.5
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();

    const html = fixture.nativeElement;
    // Obtendo todos os matIcons no html
    const matIcons = document.getElementsByTagName('mat-icon');
    // Checando todos os icones
    expect(matIcons[0].textContent?.trim()).toContain('star');
    expect(matIcons[1].textContent?.trim()).toContain('star');
    expect(matIcons[2].textContent?.trim()).toContain('star');
    expect(matIcons[3].textContent?.trim()).toContain('star_half');
    expect(matIcons[4].textContent?.trim()).toContain('star_border');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
