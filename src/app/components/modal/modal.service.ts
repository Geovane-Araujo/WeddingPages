import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public readonly id = signal<number | null>(null);

  private readonly visibleChanged = computed(() => {
    if(this.id()) {
      console.log("Captura dados da nova imagem")
    } else {
      console.log("Não faz nada");
    }
  })

  constructor() { }
}
