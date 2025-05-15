import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { AdminComponent } from './features/admin/admin.component';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/pages/sign-up/sign-up.component';
import { VideoGalleryPageComponent } from './features/video-gallery/pages/video-gallery-page/video-gallery-page.component';
import { VideoPageComponent } from './features/video-gallery/pages/video-page/video-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AdminComponent,
    SignInComponent,
    SignUpComponent,
    VideoGalleryPageComponent,
    VideoPageComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
