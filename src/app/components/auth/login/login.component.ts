import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import toastr from 'toastr'
import { AuthService } from 'src/app/core/services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user$

  loginForm = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(3) ])
  })

  constructor(private authService: AuthService, private router: Router) { }

  get username () { return this.loginForm.get('username') }
  get password () { return this.loginForm.get('password') }

  ngOnInit() {
  }

  ngOnDestroy (): void {
    if (this.user$) {
      this.user$.unsubscribe()
    }
  }

  onSubmit () {
    const user = this.loginForm.value
    this.user$ = this.authService.login(user).subscribe(user => { 
      this.authService.saveSession(user)
      toastr.success('Успешно влизане', '', { timeOut: 1000 })
      window.sessionStorage.setItem('role', user['_kmd'].roles[0].roleId)
      this.router.navigateByUrl('/shoes')
    }, err => toastr.error(err.error.description))
  }

}
