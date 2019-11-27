import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Shoe } from '../models/shoe'

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  URL: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'

  constructor (private http: HttpClient) { }

  addShoe (shoe: Shoe) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}appdata/${this.APP_KEY}/shoes`
    return this.http.post<Shoe>(url, shoe, httpHeaders)
  }

  getAllShoes () {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}appdata/${this.APP_KEY}/shoes`
    return this.http.get<Shoe[]>(url, httpHeaders)
  }

  getShoe (id: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}appdata/${this.APP_KEY}/shoes/${id}`
    return this.http.get<Shoe>(url, httpHeaders)
  }

  updateShoe (id: string, shoe: Shoe) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}appdata/${this.APP_KEY}/shoes/${id}`
    return this.http.put(url, shoe, httpHeaders)
  }

  deletetShoe (id: string) {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}appdata/${this.APP_KEY}/shoes/${id}`
    return this.http.delete(url, httpHeaders)
  }
}
