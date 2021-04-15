import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  product!: Product;

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(`${id}`)
      .subscribe(product => this.product = product)
    // console.log(id)
  };

  public swiperConfig: SwiperOptions = {
    direction: 'horizontal', // definição da direção do slider
    keyboard: true, // Aqui definimos se o slide passará as fotos caso pressionarmos as setas do teclado, caso seja falso esse comportamento não acontecerá
    grabCursor: true, // Aqui ao passar o mouse no slide, será trocado o cursor, permitindo arrastar para o próximo slide
    pagination: { el: '.swiper-pagination', clickable: true, }
    // Aqui definimos a paginação dele, no caso são as bolinhas que ficam na parte inferior do slide
  };

};

