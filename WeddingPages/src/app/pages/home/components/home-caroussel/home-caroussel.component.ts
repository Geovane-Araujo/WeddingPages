import { Component } from '@angular/core';

@Component({
  selector: 'app-home-caroussel',
  templateUrl: './home-caroussel.component.html',
  styleUrls: ['./home-caroussel.component.scss']
})
export class HomeCarousselComponent {
  images: string[] = [
    '../../../assets/images/1.jpeg',
    '../../../assets/images/2.jpeg',
    '../../../assets/images/3.jpeg',
    '../../../assets/images/4.jpeg',
    '../../../assets/images/5.jpeg',
    '../../../assets/images/6.jpeg',
    '../../../assets/images/7.jpeg',
    '../../../assets/images/9.jpeg',
    '../../../assets/images/10.jpeg',
    '../../../assets/images/11.jpeg',
    '../../../assets/images/12.jpeg'
  ];
  currentImages: string[] = [];
  currentIndex: number = 0;

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

  startCarousel(): void {
    const interval = setInterval(() => {
      this.currentImages = [
        this.images[this.currentIndex],
        this.images[(this.currentIndex + 1) % this.images.length],
        this.images[(this.currentIndex + 2) % this.images.length]
      ];
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);

    // // Clear the interval when component is destroyed
    // setTimeout(() => {
    //   clearInterval(interval);
    // }, (this.images.length + 2) * 3000); // Clear interval after all images have been shown
  }
}
