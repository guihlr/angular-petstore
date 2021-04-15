import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { MatCardModule } from '@angular/material/card';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductComponent } from './pages/product/product.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    NgxUsefulSwiperModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
