import { Component, HostListener } from '@angular/core';
import { ModalCarouselService } from 'src/app/components/modal-carousel/modal-carousel.service';
import { ModalService } from 'src/app/components/modal/modal.service';

@Component({
  selector: 'app-home-caroussel',
  templateUrl: './home-caroussel.component.html',
  styleUrls: ['./home-caroussel.component.scss']
})
export class HomeCarousselComponent {
  public isMobile: boolean;

  public images: number[] = [ 2, 5, 6, 7, 9, 10, 11];
  public currentImages: number[] = [];
  public currentIndex: number = 0;

  @HostListener('window:load', ['$event'])
  private onLoad($event: any) {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('window:resize', ['$event'])
  private onResize($event: any) {
    this.isMobile = $event.target.outerWidth <= 768;
  }

  constructor(
    public readonly modalCarouselService: ModalCarouselService,
    private readonly modalService: ModalService) {}

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

  public onClickImage(id: number): void {
    if(this.isMobile) {
      this.openModalCarousel(id);
    } else {
      this.showImage(id);
    }
  }

  public showImage(id: number): void {
    this.modalService.id.set(id)
  }

  public openModalCarousel(id: number) {
    this.modalCarouselService.modalVisible = true;
    this.modalCarouselService.idImage = id;
  }
}
