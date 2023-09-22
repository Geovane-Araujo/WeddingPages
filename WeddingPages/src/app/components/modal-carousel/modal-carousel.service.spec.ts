import { TestBed } from '@angular/core/testing';

import { ModalCarouselService } from './modal-carousel.service';

describe('ModalCarouselService', () => {
  let service: ModalCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
