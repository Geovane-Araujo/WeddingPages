import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRemainingCountdownComponent } from './home-remaining-countdown.component';

describe('HomeRemainingCountdownComponent', () => {
  let component: HomeRemainingCountdownComponent;
  let fixture: ComponentFixture<HomeRemainingCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRemainingCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRemainingCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
