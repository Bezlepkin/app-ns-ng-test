import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptMaterialBottomSheetModule } from '@nativescript-community/ui-material-bottomsheet/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { BottomSheetComponent } from './components/bottom-sheet.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptMaterialBottomSheetModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    BottomSheetComponent,
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
