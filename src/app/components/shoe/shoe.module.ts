import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShoeListComponent } from './shoe-list/shoe-list.component'
import { ShoeComponent } from './shoe/shoe.component'
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component'
import { ShoeRoutingModule } from './shoe-routing.module'
import { AdminModule } from '../admin/admin.module'

@NgModule({
  declarations: [ShoeListComponent, ShoeComponent, ShoeDetailsComponent],
  imports: [
    CommonModule,
    ShoeRoutingModule,
    AdminModule
  ]
})
export class ShoeModule { }
