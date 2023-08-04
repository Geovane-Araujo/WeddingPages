import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemainingTimeComponent } from './home-remaining-time.component';

describe('HomeRemainingTimeComponent', () => {
  let component: HomeRemainingTimeComponent;
  let fixture: ComponentFixture<HomeRemainingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRemainingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRemainingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
