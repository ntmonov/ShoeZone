import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ShoeService } from 'src/app/core/services/shoe.service'
import toastr from 'toastr'
import { PictureService } from 'src/app/core/services/picture.service'

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
    price: new FormControl(0)
  })
  constructor (private shoeService: ShoeService, private pictureService: PictureService) { }

  ngOnDestroy () {
    if (this.shoe$) {
      this.shoe$.unsubscribe()
    }
  }

  async onSubmit () {
    let imageField = document.getElementById('inputImage') as HTMLInputElement
    let image = imageField.files[0]
    const imageId = await this.pictureService.uploadImage(image)
    let shoe = this.addShoeForm.value
    shoe['imageId'] = imageId
    this.shoe$ = this.shoeService.addShoe(shoe).subscribe(() => {
      toastr.success('Обувката е добавена')
      this.addShoeForm.reset()
      imageField.value = ''

    }, () => toastr.error('Грешка'))
  }
}
