import { TestBed } from '@angular/core/testing';

import { SubjectGuard } from './subject.guard';

describe('SubjectGuard', () => {
  let guard: SubjectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubjectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
