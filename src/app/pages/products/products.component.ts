import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interfaces/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit
{



  constructor (
    private productsService: ProductsService
  ) { }

  ngOnInit (): void
  {
    this.getProducts();
  }

  products!: Products[];

  getProducts (): void
  {
    this.productsService.getProducts().subscribe(
      products => products = products);

  }


}
