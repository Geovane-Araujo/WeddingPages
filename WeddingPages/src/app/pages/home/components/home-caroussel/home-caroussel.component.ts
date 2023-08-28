import { Component } from '@angular/core';
import { ModalService } from 'src/app/components/modal/modal.service';

@Component({
  selector: 'app-home-caroussel',
  templateUrl: './home-caroussel.component.html',
  styleUrls: ['./home-caroussel.component.scss']
})
export class HomeCarousselComponent {
  images: number[] = [ 2, 5, 6, 7, 9, 10, 11];
  currentImages: number[] = [];
  currentIndex: number = 0;

  constructor(private readonly modalService: ModalService) {}

  ngOnInit(): void {
    this.startCarousel();
  }

  get imageStyle() {
    return {
      'object-fit': 'cover',
      'width.px': 500,
      'height.px': 500
    };
  }

  public startCarousel(): void {
    setInterval(() => {
      this.currentImages = [
        this.images[this.currentIndex],
        this.images[(this.currentIndex + 1) % this.images.length],
        this.images[(this.currentIndex + 2) % this.images.length]
      ];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }

  public showImage(id: number): void {
    this.modalService.visible.next(id)
  }
}
