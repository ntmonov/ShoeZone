import { Component, OnInit, OnDestroy } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'
import { ActivatedRoute } from '@angular/router'
import { ShoeService } from 'src/app/core/services/shoe.service'
import { CartService } from 'src/app/core/services/cart.service'
import toastr from 'toastr'

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.css']
})
export class ShoeDetailsComponent implements OnInit, OnDestroy {
  shoe: Shoe
  id: string
  route$
  shoe$
  cart$
  constructor (private route: ActivatedRoute, private shoeService: ShoeService, private cartService: CartService) { }

  ngOnDestroy () {
    if (this.route$) {
      this.route$.unsubscribe()
    }
    if (this.shoe$) {
      this.shoe$.unsubscribe()
    }
    if (this.cart$) {
      this.cart$.unsubscribe()
    }
  }

  ngOnInit () {
    this.route$ = this.route.params.subscribe(params => this.id = params.id, err => console.log(err))
    this.shoe$ = this.shoeService.getShoe(this.id).subscribe(data => this.shoe = data, err => console.log(err))
  }

  addToCart (shoeId) {
    this.cart$ = this.cartService.addToCart(shoeId).subscribe(data => toastr.success('Shoe added to cart'), err => toastr.error(err))
  }

}
