import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import toastr from 'toastr';
let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.user$) {
            this.user$.unsubscribe();
        }
    }
    onSubmit() {
        const user = this.loginForm.value;
        this.user$ = this.authService.login(user).subscribe(user => {
            this.authService.saveSession(user);
            toastr.success('Успешно влизане', '', { timeOut: 1000 });
        }, err => console.log(err));
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map