import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsComponent } from './gifts.component';
import { GiftsTitleComponent } from './components/gifts-title/gifts-title.component';
import { GiftsProductsComponent } from './components/gifts-products/gifts-products.component';



@NgModule({
  declarations: [
    GiftsComponent,
    GiftsTitleComponent,
    GiftsProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }
