import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTitleComponent } from './attendance-title.component';

describe('AttendanceTitleComponent', () => {
  let component: AttendanceTitleComponent;
  let fixture: ComponentFixture<AttendanceTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendanceTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
