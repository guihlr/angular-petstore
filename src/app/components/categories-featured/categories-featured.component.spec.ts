import { CategoriesService } from 'src/app/services/categories.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesFeaturedComponent } from './categories-featured.component';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mocks';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesFeaturedComponent],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () => {
    const fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    fixture.detectChanges();
    const h1 = fixture.nativeElement;
    expect(h1.querySelector('.container h2').textContent).toContain('Categorias em destaque')
  });

  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').length).toEqual(2)
  });

  it('should check fist category card name in HTML', () => {
    const html = fixture.nativeElement;
    // console.log(html.getElementsByClassName('category-item').item(0));
    expect(html.getElementsByClassName('category-item').item(0).textContent).toContain('Ração');
    // expect(html.getElementsByClassName('category-item').[0].textContent).toContain('Ração')
  });

});
