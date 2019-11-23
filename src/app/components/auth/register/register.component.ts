import { Component, OnInit, OnDestroy } from '@angular/core'
import { AuthService } from 'src/app/core/services/auth.service'
import { FormGroup, FormControl } from '@angular/forms'
import toastr from 'toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  userId: string
  user$
  role$
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    repeatPass: new FormControl(''),
    address: new FormControl('')
  })

  constructor (private authService: AuthService) { }
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

  async onSubmit () {
    const user = this.registerForm.value
    delete user.repeatPass
    this.user$ = this.authService.register(user).subscribe(data => {
      this.authService.saveSession(data)
      toastr.success('Успешна регистрация', '', { timeOut: 1000 })
      this.role$ = this.authService.assignRole(data['_id']).subscribe(data => console.log(data))
    })
  }

}
