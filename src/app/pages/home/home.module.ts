import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeMainPicComponent } from './components/home-main-pic/home-main-pic.component';
import { HomeRemainingTimeComponent } from './components/home-remaining-time/home-remaining-time.component';
import { HomeCarousselComponent } from './components/home-caroussel/home-caroussel.component';
import { HomeMessagesLinkComponent } from './components/home-messages-link/home-messages-link.component';
import { HomeRecentPhotosComponent } from './components/home-recent-photos/home-recent-photos.component';
import { HomeRemainingCountdownComponent } from './components/home-remaining-countdown/home-remaining-countdown.component';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { RouterModule } from '@angular/router';
import { ModalCarouselService } from 'src/app/components/modal-carousel/modal-carousel.service';

@NgModule({
  declarations: [
    HomeComponent,
    HomeMainPicComponent,
    HomeRemainingTimeComponent,
    HomeCarousselComponent,
    HomeMessagesLinkComponent,
    HomeRecentPhotosComponent,
    HomeRemainingCountdownComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    ModalModule,
    RouterModule
  ],
  providers: [
    ModalCarouselService
  ]
})
export class HomeModule { }
