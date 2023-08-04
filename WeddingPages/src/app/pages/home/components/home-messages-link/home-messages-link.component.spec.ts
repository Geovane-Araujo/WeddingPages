import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessagesLinkComponent } from './home-messages-link.component';

describe('HomeMessagesLinkComponent', () => {
  let component: HomeMessagesLinkComponent;
  let fixture: ComponentFixture<HomeMessagesLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMessagesLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMessagesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
