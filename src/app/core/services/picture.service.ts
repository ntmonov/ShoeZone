import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParameterCodec } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  URL: string = 'https://baas.kinvey.com/'
  APP_KEY: string = 'kid_SJyjlfShr'

  constructor (private http: HttpClient) {}

  async uploadImage (image: File) {
    let imageId: string
    const httpHeaders = {
      headers: new HttpHeaders({
        'X-Kinvey-Content-Type': image.type,
        'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
      })
    }
    const upLoadInfo = await this.http.post(`${this.URL}blob/${this.APP_KEY}/`, {}, httpHeaders).toPromise()
    imageId = upLoadInfo['_id']
    const upLoadUrl = upLoadInfo['_uploadURL']
    let fd = new FormData()
    fd.append('image', image)
    const httpHeadersForUpload = {
      headers: new HttpHeaders({
        'Content-Length': image.size.toString()
      })
    }
    await this.http.put(upLoadUrl, fd.get('image'), httpHeadersForUpload).toPromise()
    return imageId
  }
}
