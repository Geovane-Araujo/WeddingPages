import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { MessagesComponent } from './pages/messages/messages.component';

const routes: Routes = [
  { path:"", component: HomeComponent, pathMatch: "full" },
  { path:"about", component: AboutComponent },
  { path:"attendance", component: AttendanceComponent },
  { path:"gifts", component: GiftsComponent },
  { path:"messages", component: MessagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
