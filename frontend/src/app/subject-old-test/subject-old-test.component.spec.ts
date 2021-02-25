import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectOldTestComponent } from './subject-old-test.component';

describe('SubjectOldTestComponent', () => {
  let component: SubjectOldTestComponent;
  let fixture: ComponentFixture<SubjectOldTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectOldTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectOldTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
