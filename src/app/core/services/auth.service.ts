import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'
  APP_SECRET: string = '5955cdcd7e244e17a7dd53c8f7cae439'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Basic ' + btoa(`${this.APP_KEY}:${this.APP_SECRET}`)
    })
  }

  constructor (private http: HttpClient) { }

  isLoggedIn (): boolean {
    return sessionStorage.getItem('token') !== null
  }

  saveSession (user) {
    window.sessionStorage.setItem('token', user._kmd.authtoken)
    window.sessionStorage.setItem('username', user.username)
  }

  login (user) {
    const url: string = `${this.URL}user/${this.APP_KEY}/login`
    return this.http.post(url, JSON.stringify(user), this.httpOptions)
  }

  register (user) {
    const url: string = `${this.URL}user/${this.APP_KEY}`
    return this.http.post(url, JSON.stringify(user), this.httpOptions)
  }

  logout () {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const url: string = `${this.URL}user/${this.APP_KEY}/_logout`
    return this.http.post(url, {}, httpHeaders)
  }
}
