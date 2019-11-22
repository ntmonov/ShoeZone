import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string
  user$
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe()
  }

  ngDoCheck () {
    this.username = window.sessionStorage.getItem('username')
  }

  logout () {
    this.user$ = this.authService.logout().subscribe(data => window.sessionStorage.clear(), err => console.log(err))
  }

}
