import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'
  APP_SECRET: string = '5955cdcd7e244e17a7dd53c8f7cae439'
  USER_ROLE_ID: string = 'ef0cfeda-5a9a-4a9b-ac2c-adbfd6362109'
  ADMIN_ROLE_ID: string = '0d675e20-901f-4b43-babe-255b64aed41a'

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
    window.sessionStorage.setItem('role', user._kmd.roles[0].roleId)
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

  assignRole (userId: string) {
    const roleOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic a2lkX1NKeWpsZlNocjpjZDg1MmJhMTdkZGM0ZjNlYWE0MmM0ZDcyMzhjYjlkMA==' })
    }

    const url: string = `https://baas.kinvey.com/user/${this.APP_KEY}/${userId}/roles/ef0cfeda-5a9a-4a9b-ac2c-adbfd6362109`
    return this.http.put(url, {}, roleOptions)
  }

  isAuth () {
    return window.sessionStorage.getItem('token') !== null
  }

  isAdmin () {
    return window.sessionStorage.getItem('role') === this.ADMIN_ROLE_ID
  }
}
