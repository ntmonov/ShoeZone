import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Shoe } from '../models/shoe'

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  URL: string = 'https://api.imgur.com/3/'
  CLIENT_ID: string = '9bfa71a3b12950c'
  CLIENT_SECRET: string = 'e69016554fc80409cd38103bfc63fa4184a3817a'
  URLShoe: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'

  constructor (private http: HttpClient) { }

  upload (data: FormDataEntryValue) {
    const uploadHeaders = {
      headers: new HttpHeaders({
        'Authorization': 'Client-ID ' + this.CLIENT_ID})
    }
    return this.http.post(this.URL + 'image', data, uploadHeaders)
  }

  addShoe (shoe: Shoe) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URLShoe}appdata/${this.APP_KEY}/shoes`
    return this.http.post(url, shoe, httpHeaders)
  }
}
