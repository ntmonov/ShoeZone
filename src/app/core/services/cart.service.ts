import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Shoe } from '../models/shoe'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  URL: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'

  constructor (private http: HttpClient) { }

  addToCart (shoeId: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const userId = window.sessionStorage.getItem('id')
    const body = {
      productId: shoeId,
      userId
    }
    return this.http.post(`${this.URL}appdata/${this.APP_KEY}/cart`, body, httpHeaders)
  }

  getCartProducts () {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const userId = window.sessionStorage.getItem('id')
    return this.http.get<string[]>(`${this.URL}appdata/${this.APP_KEY}/cart?query={"userId":"${userId}"}`, httpHeaders)
  }

  getProductById (shoeId: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    return this.http.get<Shoe>(`${this.URL}appdata/${this.APP_KEY}/shoes?query={"_id":"${shoeId}"}`, httpHeaders)
  }
}
