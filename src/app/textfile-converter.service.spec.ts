import { TestBed } from '@angular/core/testing';

import { TextfileConverterService } from './textfile-converter.service';

describe('TextfileConverterService', () => {
  let service: TextfileConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextfileConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
