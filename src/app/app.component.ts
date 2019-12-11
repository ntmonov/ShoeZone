import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoeZone'
  username: string = ''

  getUser () {
    this.username = window.sessionStorage.getItem('username')
  }
}
