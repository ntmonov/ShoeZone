import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddShoeComponent } from './add-shoe/add-shoe.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EditShoeComponent } from './edit-shoe/edit-shoe.component'

@NgModule({
  declarations: [AddShoeComponent, EditShoeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddShoeComponent
  ]
})
export class AdminModule { }
