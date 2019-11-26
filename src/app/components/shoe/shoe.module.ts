import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeComponent } from './shoe/shoe.component'

@NgModule({
  declarations: [ShoeListComponent, ShoeComponent],
  imports: [
    CommonModule
  ]
})
export class ShoeModule { }
