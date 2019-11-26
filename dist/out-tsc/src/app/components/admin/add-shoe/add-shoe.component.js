import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
let AddShoeComponent = class AddShoeComponent {
    constructor(shoeService) {
        this.shoeService = shoeService;
        this.addShoeForm = new FormGroup({
            file: new FormControl('')
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        const file = document.getElementById('inputImage');
        let formData = new FormData();
        formData.append('file', file['files'][0]);
        this.shoeService.upload(formData.get('file')).subscribe(data => console.log(data), err => console.log(err));
    }
};
AddShoeComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-shoe',
        templateUrl: './add-shoe.component.html',
        styleUrls: ['./add-shoe.component.css']
    })
], AddShoeComponent);
export { AddShoeComponent };
//# sourceMappingURL=add-shoe.component.js.map