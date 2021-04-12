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
});
