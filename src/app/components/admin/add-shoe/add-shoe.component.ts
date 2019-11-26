import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import { ShoeService } from 'src/app/core/services/shoe.service'

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
      console.log(data)
      this.imgUrl = data['data']['link']
      const shoe = this.addShoeForm.value
      shoe.imageUrl = this.imgUrl
      console.log(shoe)
      this.shoeService.addShoe(shoe).subscribe(data => console.log(data), err => console.log(err))
    }, err => console.log(err))
  }

}
