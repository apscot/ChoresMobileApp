import { TestBed } from '@angular/core/testing';

import { DodontclassService } from './dodontclass.service';

describe('DodontclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DodontclassService = TestBed.get(DodontclassService);
    expect(service).toBeTruthy();
  });
});
