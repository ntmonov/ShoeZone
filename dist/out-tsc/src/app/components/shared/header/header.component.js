import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import toastr from 'toastr';
let HeaderComponent = class HeaderComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.user$.unsubscribe();
    }
    ngDoCheck() {
        this.username = window.sessionStorage.getItem('username');
    }
    logout() {
        this.user$ = this.authService.logout().subscribe(data => {
            window.sessionStorage.clear();
            toastr.success('Успешно излизане', '', { timeOut: 1000 });
        }, err => console.log(err));
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map