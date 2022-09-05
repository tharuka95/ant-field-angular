import { TestBed } from '@angular/core/testing';

import { AntFieldService } from './ant-field.service';

describe('AntFieldService', () => {
  let service: AntFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
