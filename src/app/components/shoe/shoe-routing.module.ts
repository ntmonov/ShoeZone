import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ShoeListComponent } from './shoe-list/shoe-list.component'
import { EditShoeComponent } from '../admin/edit-shoe/edit-shoe.component'
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component'

const routes: Routes = [
  { path: '',pathMatch: 'full', component: ShoeListComponent },
  { path: ':id', component: EditShoeComponent },
  { path: 'details/:id', component: ShoeDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoeRoutingModule { }
