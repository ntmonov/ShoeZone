import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import toastr from 'toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Output() getUserData = new EventEmitter()

  userId: string
  user$
  role$
  registerForm = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(3) ]),
    repeatPass: new FormControl(''),
    address: new FormControl('', [ Validators.required, Validators.minLength(10) ])
  })

  get username () { return this.registerForm.get('username') }
  get password () { return this.registerForm.get('password') }
  get repeatPass () { return this.registerForm.get('repeatPass') }
  get address () { return this.registerForm.get('address') }


  constructor (private authService: AuthService, private router: Router) { }
  ngOnInit () {
  }

  ngOnDestroy (): void {
    if (this.user$) {
      this.user$.unsubscribe()
    }

    if (this.role$) {
      this.role$.unsubscribe()
    }
  }

  getUser () {
    this.getUserData.emit()
  }

  async onSubmit () {
    const user = this.registerForm.value
    delete user.repeatPass
    this.user$ = this.authService.register(user).subscribe(data => {
      this.authService.saveSession(data)
      toastr.success('Успешна регистрация', '', { timeOut: 1000 })
      this.role$ = this.authService.assignRole(data['_id']).subscribe(data => { window.sessionStorage.setItem('role', data['roleId']) ; this.router.navigateByUrl('/shoes') })
    }, err => toastr.error(err.error.description))
  }

}
