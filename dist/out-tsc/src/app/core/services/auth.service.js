import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.URL = 'https://baas.kinvey.com/';
        this.APP_KEY = 'kid_SJyjlfShr';
        this.APP_SECRET = '5955cdcd7e244e17a7dd53c8f7cae439';
        this.USER_ROLE_ID = 'ef0cfeda-5a9a-4a9b-ac2c-adbfd6362109';
        this.ADMIN_ROLE_ID = '0d675e20-901f-4b43-babe-255b64aed41a';
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.APP_KEY}:${this.APP_SECRET}`)
            })
        };
    }
    isLoggedIn() {
        return sessionStorage.getItem('token') !== null;
    }
    saveSession(user) {
        window.sessionStorage.setItem('token', user._kmd.authtoken);
        window.sessionStorage.setItem('username', user.username);
    }
    login(user) {
        const url = `${this.URL}user/${this.APP_KEY}/login`;
        return this.http.post(url, JSON.stringify(user), this.httpOptions);
    }
    register(user) {
        const url = `${this.URL}user/${this.APP_KEY}`;
        return this.http.post(url, JSON.stringify(user), this.httpOptions);
    }
    logout() {
        const httpHeaders = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + window.sessionStorage.getItem('token')
            })
        };
        const url = `${this.URL}user/${this.APP_KEY}/_logout`;
        return this.http.post(url, {}, httpHeaders);
    }
    assignRole(userId) {
        const roleOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Basic a2lkX1NKeWpsZlNocjpjZDg1MmJhMTdkZGM0ZjNlYWE0MmM0ZDcyMzhjYjlkMA=='
            })
        };
        const url = `https://baas.kinvey.com/user/${this.APP_KEY}/${userId}/roles/ef0cfeda-5a9a-4a9b-ac2c-adbfd6362109`;
        return this.http.put(url, {}, roleOptions);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map