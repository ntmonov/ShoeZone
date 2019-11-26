import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let ShoeService = class ShoeService {
    constructor(http) {
        this.http = http;
        this.URL = 'https://api.imgur.com/3/';
        this.CLIENT_ID = '9bfa71a3b12950c';
        this.CLIENT_SECRET = 'e69016554fc80409cd38103bfc63fa4184a3817a';
    }
    upload(data) {
        const uploadHeaders = {
            headers: new HttpHeaders({
                'Authorization': 'Client-ID ' + this.CLIENT_ID
            })
        };
        return this.http.post(this.URL + 'image', data, uploadHeaders);
    }
};
ShoeService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ShoeService);
export { ShoeService };
//# sourceMappingURL=shoe.service.js.map