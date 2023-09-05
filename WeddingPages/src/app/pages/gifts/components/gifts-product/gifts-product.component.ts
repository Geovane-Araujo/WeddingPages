import { Component, Input } from '@angular/core';

export interface GiftList {
  image: string;
  description: string;
  value: string;
}

@Component({
  selector: 'app-gifts-product',
  templateUrl: './gifts-product.component.html',
  styleUrls: ['./gifts-product.component.scss']
})
export class GiftsProductComponent {
  @Input({ required: true }) image: string;
  @Input({ required: true }) description: string;
  @Input({ required: true }) value: string;
}
