import { ProductsService } from './../../services/products.service';
import { Products } from './../../interfaces/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit
{

  products: Products[] = [];

  constructor (private productsService: ProductsService) { }

  ngOnInit (): void
  {
    this.getProductsHighlights();
  }

  getProductsHighlights (): void
  {
    this.productsService.getProductsHighlights()
      .subscribe(products => this.products = products);
  }

}
