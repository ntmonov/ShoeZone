import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ShoeService } from 'src/app/core/services/shoe.service'
import toastr from 'toastr'

@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnDestroy {
  shoe$
  addShoeForm = new FormGroup({
    make: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    imageUrl: new FormControl('')
  })
  imgUrl: string
  constructor (private shoeService: ShoeService) { }

  ngOnDestroy () {
    if (this.shoe$) {
      this.shoe$.unsubscribe()
    }
  }

  onSubmit () {
    const shoe = this.addShoeForm.value
    this.shoe$ = this.shoeService.addShoe(shoe).subscribe(shoe => {
      toastr.success('Успешно добавена обувка')
      this.addShoeForm.reset()
    }, () => toastr.error('Грешка при създаването на обувката'))
  }
}
