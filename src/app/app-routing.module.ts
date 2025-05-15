import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGalleryPageComponent } from './features/video-gallery/pages/video-gallery-page/video-gallery-page.component';
import { GalleryComponent } from './features/gallery/gallery.component';
import { HomeComponent } from './features/home/home.component';
import { SignInComponent } from './features/auth/pages/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'videos', component: VideoGalleryPageComponent },
  { path: 'images', component: GalleryComponent },
  { path: 'sign-in', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
