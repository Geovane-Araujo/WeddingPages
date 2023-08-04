import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceConfirmationComponent } from './attendance-confirmation.component';

describe('AttendanceConfirmationComponent', () => {
  let component: AttendanceConfirmationComponent;
  let fixture: ComponentFixture<AttendanceConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
