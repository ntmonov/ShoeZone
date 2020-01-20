import { Component, OnInit, Input } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'
import { AuthService } from 'src/app/core/services/auth.service'
import { ShoeService } from 'src/app/core/services/shoe.service'
import { Router } from '@angular/router'
import toastr from 'toastr'
import { PictureService } from 'src/app/core/services/picture.service'

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  @Input() shoe: Shoe
  imageUrl: string
  constructor(private authService: AuthService, private shoeService: ShoeService, private router: Router, private pictureService: PictureService) { }

  ngOnInit() {
    this.pictureService.getPictureById(this.shoe.imageId).subscribe(data => {
      this.imageUrl = data['_downloadURL']
    })
  }

  handleDelete () {
    this.pictureService.deletePicture(this.shoe.imageId).subscribe(data => {
      console.log('Pic deleted')
    })
    this.shoeService.deletetShoe(this.shoe['_id']).subscribe(data => {
      toastr.success('Обувката е изтрита')
      location.reload()
    }, () => toastr.error('Грешка приизтриването'))
  }

}
