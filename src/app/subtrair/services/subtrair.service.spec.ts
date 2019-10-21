import { TestBed } from '@angular/core/testing';

import { SubtrairService } from './subtrair.service';

describe('SubtrairService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubtrairService = TestBed.get(SubtrairService);
    expect(service).toBeTruthy();
  });
});
