import { Component, OnInit } from "@angular/core";
import { BottomSheetParams } from '@nativescript-community/ui-material-bottomsheet/angular';
@Component({
    selector: "bottom-sheet",
    moduleId: module.id,
    templateUrl: "./bottom-sheet.component.html",
    styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

    items: Array<any> = [];
    private length = 100;

    constructor(private params: BottomSheetParams) {
        for (let i = 1; i <= this.length; i++) {
            this.items.push({ value: `Value ${i}` });
        }
    }

    ngOnInit(): void { }

    onClose(): void {
        this.params.closeCallback();
    }
}
