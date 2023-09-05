import { Component, Input } from '@angular/core';
import { GiftList } from '../gifts-product/gifts-product.component';

type ReorderType = "value" | "alphabetic";
type Direction = "growing" | "descending";

@Component({
  selector: 'app-gifts-products',
  templateUrl: './gifts-products.component.html',
  styleUrls: ['./gifts-products.component.scss']
})
export class GiftsProductsComponent {
  public giftList: GiftList[] = [
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 62,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 63,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 64,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 65,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 66,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 67,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 68,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 69,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 70,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 71,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 72,50"
    },
    {
      image: "https://img.thrfun.com/img/080/019/pouring_a_glass_of_champagne_tx1.jpg",
      description: "Comemorar nosso casamento com champanhe no mar",
      value: "R$ 73,50"
    }
  ];

  public reorderProducts(type: ReorderType, order: Direction) {
    if(type === "value" && order === "growing") {
      this.giftList = this.giftList.sort((a, b) => this.convertValueInNumber(a.value) > this.convertValueInNumber(b.value) ? -1 : 1)
    } else {
      this.giftList = this.giftList.sort((a, b) => this.convertValueInNumber(b.value) > this.convertValueInNumber(a.value) ? -1 : 1)
    }
  } 

  public convertValueInNumber(valueString: string): number {
    valueString = valueString.replace("R$", "");
    valueString = valueString.replace(",", ".");
    return Number(valueString);
  }
}
