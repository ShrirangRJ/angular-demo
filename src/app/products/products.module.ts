import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { UsersModule } from '../users/users.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'product-home',component:ProductsComponent},
      {path:'product-detail',component:ProductDetailComponent}
    ]),
    UsersModule
  ],
  exports:[]
})
export class ProductsModule { }
