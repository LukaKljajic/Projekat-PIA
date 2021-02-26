import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectNewsUpdateComponent } from './employee-subject-news-update.component';

describe('EmployeeSubjectNewsUpdateComponent', () => {
  let component: EmployeeSubjectNewsUpdateComponent;
  let fixture: ComponentFixture<EmployeeSubjectNewsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectNewsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectNewsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
