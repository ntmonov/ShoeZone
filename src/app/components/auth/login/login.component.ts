import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormControl } from '@angular/forms'
import toastr from  'toastr'
import { AuthService } from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user$
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private authService: AuthService) { }

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
    }, err => console.log(err))
  }

}
