import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectNewsComponent } from './employee-subject-news.component';

describe('EmployeeSubjectNewsComponent', () => {
  let component: EmployeeSubjectNewsComponent;
  let fixture: ComponentFixture<EmployeeSubjectNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
