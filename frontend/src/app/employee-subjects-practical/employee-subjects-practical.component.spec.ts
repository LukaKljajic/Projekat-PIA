import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsPracticalComponent } from './employee-subjects-practical.component';

describe('EmployeeSubjectsPracticalComponent', () => {
  let component: EmployeeSubjectsPracticalComponent;
  let fixture: ComponentFixture<EmployeeSubjectsPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsPracticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
