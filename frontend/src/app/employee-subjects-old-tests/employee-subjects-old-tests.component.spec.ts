import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsOldTestsComponent } from './employee-subjects-old-tests.component';

describe('EmployeeSubjectsOldTestsComponent', () => {
  let component: EmployeeSubjectsOldTestsComponent;
  let fixture: ComponentFixture<EmployeeSubjectsOldTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsOldTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsOldTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
