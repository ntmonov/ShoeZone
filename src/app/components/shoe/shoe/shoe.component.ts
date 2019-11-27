import { Component, OnInit, Input } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'
import { AuthService } from 'src/app/core/services/auth.service'
import { ShoeService } from 'src/app/core/services/shoe.service'
import { Router } from '@angular/router'
import toastr from 'toastr'

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {
  @Input() shoe: Shoe
  constructor(private authService: AuthService, private shoeService: ShoeService, private router: Router) { }

  ngOnInit() {
  }

  handleDelete () {
    this.shoeService.deletetShoe(this.shoe['_id']).subscribe(data => {
      this.shoeService.deletetShoeImage(this.shoe['deleteHash']).subscribe()
      toastr.success('Обувката е изтрита')
      this.router.navigateByUrl('/shoes')
    }, () => toastr.error('Грешка приизтриването'))
  }

}
