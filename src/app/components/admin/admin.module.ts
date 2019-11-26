import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddShoeComponent } from './add-shoe/add-shoe.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [AddShoeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddShoeComponent
  ]
})
export class AdminModule { }
