import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './components/landing/home-page/home-page.component'
import { LoginComponent } from './components/auth/login/login.component'
import { RegisterComponent } from './components/auth/register/register.component'
import { AddShoeComponent } from './components/admin/add-shoe/add-shoe.component'
import { ShoeListComponent } from './components/shoe/shoe-list/shoe-list.component'
import { EditShoeComponent } from './components/admin/edit-shoe/edit-shoe.component'
import { ShoeDetailsComponent } from './components/shoe/shoe-details/shoe-details.component'
import { CartComponent } from './components/cart/cart/cart.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addShoe', component: AddShoeComponent },
  { path: 'shoes', loadChildren: () => import('./components/shoe/shoe.module').then(mod => mod.ShoeModule) },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
