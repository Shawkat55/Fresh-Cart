import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategorydetailsComponent } from './categorydetails/categorydetails.component';
import { BranddetailsComponent } from './branddetails/branddetails.component';
import { WhishlistComponent } from './whishlist/whishlist.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

const routes: Routes = [
  {path:'' , redirectTo:'Home', pathMatch:'full'},
  {path:'about' ,canActivate:[authGuard], component:AboutComponent},
  {path:'brands' ,canActivate:[authGuard],component:BrandsComponent},
  {path:'products' ,canActivate:[authGuard],component:ProductsComponent},
  {path:'cart',canActivate:[authGuard],component:CartComponent},
  {path:'Categories',component:CategoriesComponent},
  {path:'Home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'forgopassord',component:ForgotpasswordComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'categoriesdetails/:id',component:CategorydetailsComponent},
  {path:'brandDetails/:id' , component:BranddetailsComponent},
  {path:'wishlist' , component:WhishlistComponent},
  {path:'checkout/:id' , component:CheckoutComponent},
  {path:'allorders' , component:AllordersComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
