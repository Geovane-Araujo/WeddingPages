import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalQrCodeComponent } from './modal-qr-code.component';

describe('ModalQrCodeComponent', () => {
  let component: ModalQrCodeComponent;
  let fixture: ComponentFixture<ModalQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalQrCodeComponent]
    });
    fixture = TestBed.createComponent(ModalQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
