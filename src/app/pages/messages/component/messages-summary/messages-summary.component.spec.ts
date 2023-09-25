import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSummaryComponent } from './messages-summary.component';

describe('MessagesSummaryComponent', () => {
  let component: MessagesSummaryComponent;
  let fixture: ComponentFixture<MessagesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
