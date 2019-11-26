import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  URL: string = 'https://api.imgur.com/3/'
  CLIENT_ID: string = '9bfa71a3b12950c'
  CLIENT_SECRET: string = 'e69016554fc80409cd38103bfc63fa4184a3817a'

  constructor (private http: HttpClient) { }

  upload (data: FormDataEntryValue) {
    const uploadHeaders = {
      headers: new HttpHeaders({
        'Authorization': 'Client-ID ' + this.CLIENT_ID})
    }
    return this.http.post(this.URL + 'image', data, uploadHeaders)
  }
}
