import { Component, OnInit, ViewContainerRef } from '@angular/core'
import { BottomSheetService, BottomSheetOptions } from '@nativescript-community/ui-material-bottomsheet/angular';
import { BottomSheetComponent } from '../components/bottom-sheet.component';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  constructor(
    private bottomSheet: BottomSheetService, 
    private containerRef: ViewContainerRef,
  ) {}

  ngOnInit(): void {}

  onShow() {
    const options: BottomSheetOptions = {
        viewContainerRef: this.containerRef,
    };

    this.bottomSheet.show(BottomSheetComponent, options);
}
}
