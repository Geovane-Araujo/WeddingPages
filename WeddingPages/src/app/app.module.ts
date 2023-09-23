import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './pages/about/about.module';
import { AttendanceModule } from './pages/attendance/attendance.module';
import { GiftsModule } from './pages/gifts/gifts.module';
import { HomeModule } from './pages/home/home.module';
import { MessagesModule } from './pages/messages/messages.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { LoagindScreenComponent } from './components/loagind-screen/loagind-screen.component';
import { ModalModule } from './components/modal/modal.module';
import { MenuMobileComponent } from './components/header/menu-mobile/menu-mobile.component';
import { ModalCarouselComponent } from './components/modal-carousel/modal-carousel.component';
import { ModalCarouselService } from './components/modal-carousel/modal-carousel.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MusicPlayerComponent,
    DropdownComponent,
    LoagindScreenComponent,
    MenuMobileComponent,
    ModalCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    AttendanceModule,
    GiftsModule,
    HomeModule,
    MessagesModule,
    ModalModule,
    HttpClientModule
  ],
  providers: [
    ModalCarouselService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
