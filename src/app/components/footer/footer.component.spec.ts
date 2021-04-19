import { MockComponent, MockComponents } from 'ng-mocks';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParametersService } from './../../services/parameters.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { ProductsServiceMock } from 'src/app/mocks/products-mocks';
import { MatCard } from '@angular/material/card';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        FooterComponent,
        MockComponents(
          MatCard
        )
      ],
      providers: [
        {
          provide: ParametersService,
          useClass: ProductsServiceMock
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Pode ser testado os items no html, se está sendo exibido todas as redes sociais...
  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('redes-sociais').length).toEqual(1);
  });

  it('should check image icons in html', () => {
    const html = fixture.nativeElement;
    // get all image-icon
    const imageIcons = document.getElementsByClassName('image-icon');
    // check image-icon count
    expect(imageIcons.length).toEqual(4);
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
