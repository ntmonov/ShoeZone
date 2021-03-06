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

  getProductsCount () {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const userId = window.sessionStorage.getItem('id')
    return this.http.get<number>(`${this.URL}appdata/${this.APP_KEY}/cart/_count?query={"userId":"${userId}"}`, httpHeaders)
  }

  async removeFromCart (productId: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const data = await this.getCartIdByProductId(productId)
    const id = data[0]['_id']
    console.log(id)
    await this.http.delete(`${this.URL}appdata/${this.APP_KEY}/cart/${id}`, httpHeaders).toPromise()
  }

  async getCartIdByProductId (productId: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const data = await this.http.get(`${this.URL}appdata/${this.APP_KEY}/cart?query={"productId":"${productId}"}&limit=1`, httpHeaders).toPromise()
    return data
  }
}
