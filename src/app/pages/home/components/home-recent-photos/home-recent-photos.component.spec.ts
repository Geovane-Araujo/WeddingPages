import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecentPhotosComponent } from './home-recent-photos.component';

describe('HomeRecentPhotosComponent', () => {
  let component: HomeRecentPhotosComponent;
  let fixture: ComponentFixture<HomeRecentPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRecentPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRecentPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
