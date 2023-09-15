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
      image: "../../../assets/images/agua_de_coco.jpeg",
      description: "Água de Coco",
      value: "R$ 45,00"
    },
    {
      image: "../../../assets/images/brinde.jpeg",
      description: "Brinde para comemoração",
      value: "R$ 110,00"
    },
    {
      image: "../../../assets/images/diaria_por_do_sol.jpeg",
      description: "Diária ao pôr do Sol",
      value: "R$ 1550,00"
    },
    {
      image: "../../../assets/images/hospedagem_lua_mel.PNG",
      description: "Hospedagem Lua de Mel",
      value: "R$ 4200,00"
    },
    {
      image: "../../../assets/images/jantar_despedida_lua_mel.jpeg",
      description: "Jantar de Despedida Lua de Mel",
      value: "R$ 250,00"
    },
    {
      image: "../../../assets/images/jantar_romantico.jpeg",
      description: "Jantar Romântico",
      value: "R$ 480,00"
    },
    {
      image: "../../../assets/images/passaportes.jpeg",
      description: "Passaporte",
      value: "R$ 985,00"
    },
    {
      image: "../../../assets/images/lingerie_nupcias.jpeg",
      description: "Lingerie para Noite de Núpcias",
      value: "R$ 670,00"
    },
    {
      image: "../../../assets/images/passeio_1.jpeg",
      description: "Passeio 1",
      value: "R$ 890,00"
    },
    {
      image: "../../../assets/images/passeio_2.jpeg",
      description: "Passeio 2",
      value: "R$ 980,00"
    },
    {
      image: "../../../assets/images/noite_luzes.jpeg",
      description: "Noite de luzes",
      value: "R$ 280,00"
    },
    {
      image: "../../../assets/images/noite_lamen.jpeg",
      description: "Noite do Lámen",
      value: "R$ 90,00"
    },
    {
      image: "../../../assets/images/passeio_trem.jpeg",
      description: "Passeio de Trem",
      value: "R$ 190,00"
    },
    {
      image: "../../../assets/images/passeio_toquio.jpeg",
      description: "Passeio em Tóquio",
      value: "R$ 300,00"
    },
    {
      image: "../../../assets/images/primeiro_jantar_m.jpeg",
      description: "Primeiro Jantar Casados",
      value: "R$ 1000,00"
    },
    {
      image: "../../../assets/images/descanso_pordosol.jpeg",
      description: "Descanso apreciando o pôr do Sol",
      value: "R$ 100,00"
    },
    {
      image: "../../../assets/images/pe_areia.jpeg",
      description: "Um dia com pé na areia",
      value: "R$ 150,00"
    },
    {
      image: "../../../assets/images/drink_night.jpeg",
      description: "Um drink na Noite",
      value: "R$ 100,00"
    },
    {
      image: "../../../assets/images/corrida_lua.jpeg",
      description: "Corrida na lua de mel",
      value: "R$ 550,00"
    },
    {
      image: "../../../assets/images/noite_rock.jpeg",
      description: "Noite de Rock",
      value: "R$ 458,00"
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
