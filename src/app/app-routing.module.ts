import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',loadChildren:()=>import ('./products/products.module').then(m=>m.ProductsModule)},
   //to provide routing fro the module
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
