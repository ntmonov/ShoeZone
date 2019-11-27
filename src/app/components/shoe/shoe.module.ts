import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoeComponent } from './shoe/shoe.component'
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ShoeDetailsComponent } from './shoe-details/shoe-details.component';

@NgModule({
  declarations: [ShoeListComponent, ShoeComponent, ShoeDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ShoeModule { }
