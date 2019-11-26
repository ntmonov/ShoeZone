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
    file: new FormControl('')
  })
  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
  }

  onSubmit () {
    const file = document.getElementById('inputImage')
    let formData = new FormData()
    formData.append('file', file['files'][0])
    this.shoeService.upload(formData.get('file')).subscribe(data => console.log(data), err => console.log(err))
  }

}
