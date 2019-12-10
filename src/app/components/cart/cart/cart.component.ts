import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Object
  cart$

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart$ = this.cartService.getCartProducts().subscribe(data => this.products = data, err => console.log(err))
  }

}
