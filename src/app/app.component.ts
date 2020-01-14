import { Component, OnDestroy } from '@angular/core'
import { CartService } from './core/services/cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  ngOnDestroy (): void {
    if (this.cart$) {
      this.cart$.unsubscribe()
    }
  }
  title = 'ShoeZone'
  username: string = ''
  cartCount: number = 0
  cart$

  constructor (private cartService: CartService) {}

  getUser () {
    this.username = window.sessionStorage.getItem('username')
    this.cart$ = this.cartService.getProductsCount().subscribe(data => this.cartCount = data['count'])
  }
}
