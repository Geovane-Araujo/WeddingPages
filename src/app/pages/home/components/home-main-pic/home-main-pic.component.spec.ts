import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainPicComponent } from './home-main-pic.component';

describe('HomeMainPicComponent', () => {
  let component: HomeMainPicComponent;
  let fixture: ComponentFixture<HomeMainPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMainPicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
