import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormGroup, FormControl } from '@angular/forms'
import { ShoeService } from 'src/app/core/services/shoe.service'
import toastr from 'toastr'
import { PictureService } from 'src/app/core/services/picture.service'

@Component({
  selector: 'app-edit-shoe',
  templateUrl: './edit-shoe.component.html',
  styleUrls: ['./edit-shoe.component.css']
})
export class EditShoeComponent implements OnInit, OnDestroy {
  getShoe$
  shoe$
  id: string
  imageUrl: string
  editShoeForm = new FormGroup({
    make: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    imageId: new FormControl()
  })
  constructor (private route: ActivatedRoute, private shoeService: ShoeService, private router: Router, private pictureService: PictureService) { }

  ngOnDestroy (): void {
    if (this.shoe$) {
      this.shoe$.unsubscribe()
    }
    if (this.getShoe$) {
      this.getShoe$.unsubscribe()
    }
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.id = params.id
    }, err => console.log(err))
    this.getShoe$ = this.shoeService.getShoe(this.id).subscribe(data => {
      this.pictureService.getPictureById(data['imageId']).subscribe(imgInfo => this.imageUrl = imgInfo['_downloadURL']
      )
      this.editShoeForm.setValue({
        make: data['make'],
        title: data['title'],
        description: data['description'],
        price: data['price'],
        imageId: data['imageId']
      })
    }, () => toastr.error('Грешка при зареждането'))
  }

  async onSubmit () {
    let shoe = this.editShoeForm.value
    let imageField = document.getElementById('inputImage') as HTMLInputElement
    let image = imageField.files[0]
    console.log(image)
    if (image !== undefined) {
      const imgId = await this.pictureService.uploadImage(image)
      shoe['imageId'] = imgId
    }
    this.shoe$ = this.shoeService.updateShoe(this.id, shoe).subscribe(() => {
      toastr.success('Успешна редакция', '', { timeOut: 1000 })
      this.router.navigateByUrl('/shoes')
    }, err => toastr.error(err.error.description))
  }
}
