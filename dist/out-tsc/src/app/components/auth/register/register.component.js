import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import toastr from 'toastr';
let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.registerForm = new FormGroup({
            username: new FormControl(''),
            password: new FormControl(''),
            repeatPass: new FormControl(''),
            address: new FormControl('')
        });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.user$) {
            this.user$.unsubscribe();
        }
        if (this.role$) {
            this.role$.unsubscribe();
        }
    }
    onSubmit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const user = this.registerForm.value;
            delete user.repeatPass;
            this.user$ = this.authService.register(user).subscribe(data => {
                this.authService.saveSession(data);
                toastr.success('Успешна регистрация', '', { timeOut: 1000 });
                this.role$ = this.authService.assignRole(data['_id']).subscribe(data => console.log(data));
            });
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map