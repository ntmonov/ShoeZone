import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Shoe } from 'src/app/core/models/shoe';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart
  productIds: string[]
  products: Shoe[] = []
  cartIds$
  cart$

  constructor (private cartService: CartService) { }

  ngOnInit () {
    this.cartService.getCartProducts().subscribe(data => {
      this.productIds = data
      const ids = []
      for (let cartItem of this.productIds) {
        ids.push(cartItem['productId'])
      }
      for (let id of ids) {
        this.cartService.getProductById(id).subscribe(data => {
          this.products.push(data)
        })
      }
    })
  //   this.productIds = await this.cartService.getCartProducts().toPromise()
  //   const ids = []
  //   for (let cartItem of this.productIds) {
  //     ids.push(cartItem['productId'])
  //   }
  //   for (let id of ids) {
  //     const prod = await this.cartService.getProductById(id).toPromise()
  //     this.products.push(prod)
  //   }
  }
}
