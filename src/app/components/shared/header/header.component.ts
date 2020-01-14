import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import toastr from 'toastr'
import { AuthService } from 'src/app/core/services/auth.service'
import { CartService } from 'src/app/core/services/cart.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user$
  @Input() username: string
  @Input() cartCount: number
  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit () {
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe()
  }

  logout () {
    this.user$ = this.authService.logout().subscribe(data => {
      window.sessionStorage.clear()
      toastr.success('Успешно излизане', '', { timeOut: 1000 }),
      this.router.navigate(['/'])
    }, err => console.log(err))
  }
}
