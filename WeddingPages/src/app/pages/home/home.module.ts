import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeMainPicComponent } from './components/home-main-pic/home-main-pic.component';
import { HomeRemainingTimeComponent } from './components/home-remaining-time/home-remaining-time.component';
import { HomeCarousselComponent } from './components/home-caroussel/home-caroussel.component';
import { HomeMessagesLinkComponent } from './components/home-messages-link/home-messages-link.component';
import { HomeRecentPhotosComponent } from './components/home-recent-photos/home-recent-photos.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeMainPicComponent,
    HomeRemainingTimeComponent,
    HomeCarousselComponent,
    HomeMessagesLinkComponent,
    HomeRecentPhotosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
