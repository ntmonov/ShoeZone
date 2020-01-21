import { Component, OnInit, Input } from '@angular/core'
import { Shoe } from 'src/app/core/models/shoe'
import { PictureService } from 'src/app/core/services/picture.service'
import { CartService } from 'src/app/core/services/cart.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() prod: Shoe
  imageUrl: string
  constructor (private pictureService: PictureService, private cartService: CartService, private router: Router) { }

  ngOnInit () {
    this.pictureService.getPictureById(this.prod[0]['imageId']).subscribe(data => this.imageUrl = data['_downloadURL'])
  }

  async removeFromCart (productId) {
    await this.cartService.removeFromCart(productId)
    location.reload()
  }

}
