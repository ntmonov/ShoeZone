import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
let LandingModule = class LandingModule {
};
LandingModule = tslib_1.__decorate([
    NgModule({
        declarations: [HomePageComponent],
        imports: [
            CommonModule,
            AppRoutingModule
        ],
        exports: [HomePageComponent]
    })
], LandingModule);
export { LandingModule };
//# sourceMappingURL=landing.module.js.map