import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGalleryPageComponent } from './video-gallery-page.component';

describe('VideoGalleryPageComponent', () => {
  let component: VideoGalleryPageComponent;
  let fixture: ComponentFixture<VideoGalleryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoGalleryPageComponent]
    });
    fixture = TestBed.createComponent(VideoGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
