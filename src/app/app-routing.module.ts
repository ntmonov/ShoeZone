import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomePageComponent } from './components/landing/home-page/home-page.component'
import { LoginComponent } from './components/auth/login/login.component'
import { RegisterComponent } from './components/auth/register/register.component'
import { AddShoeComponent } from './components/admin/add-shoe/add-shoe.component'
import { ShoeListComponent } from './components/shoe/shoe-list/shoe-list.component'
import { EditShoeComponent } from './components/admin/edit-shoe/edit-shoe.component'
import { ShoeDetailsComponent } from './components/shoe/shoe-details/shoe-details.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'addShoe', component: AddShoeComponent },
  { path: 'shoes', component: ShoeListComponent },
  { path: 'shoe/:id', component: EditShoeComponent },
  { path: 'shoe/details/:id', component: ShoeDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
