import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShoeComponent } from './add-shoe/add-shoe.component';
import { ReactiveFormsModule } from '@angular/forms';
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    NgModule({
        declarations: [AddShoeComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule
        ],
        exports: [
            AddShoeComponent
        ]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map