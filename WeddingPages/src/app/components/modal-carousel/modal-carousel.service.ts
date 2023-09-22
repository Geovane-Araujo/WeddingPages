import { Injectable } from '@angular/core';

interface Reactions {
  quantLike: number;
  quantComment: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModalCarouselService {
  public modalVisible: boolean;

  public idImage: number;
  public date: string;

  public reactions: Reactions;

  public comments: any[];
}
