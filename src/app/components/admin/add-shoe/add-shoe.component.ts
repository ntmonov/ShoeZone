import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ShoeService } from 'src/app/core/services/shoe.service'
import toastr from 'toastr'
 
@Component({
  selector: 'app-add-shoe',
  templateUrl: './add-shoe.component.html',
  styleUrls: ['./add-shoe.component.css']
})
export class AddShoeComponent implements OnInit {

  addShoeForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0)
  })
  imgUrl: string
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
  }

  onSubmit () {
    const file = document.getElementById('inputImage')
    let formData = new FormData()
    formData.append('file', file['files'][0])
    this.shoeService.upload(formData.get('file')).subscribe(data => {
      this.imgUrl = data['data']['link']
      const shoe = this.addShoeForm.value
      shoe.imageUrl = this.imgUrl
      this.shoeService.addShoe(shoe).subscribe(data => toastr.success('Успешно добавена обувка'), err => toastr.error(err.error.description))
    }, err => toastr.error('Снимката не може да се качи'))
  }

}
