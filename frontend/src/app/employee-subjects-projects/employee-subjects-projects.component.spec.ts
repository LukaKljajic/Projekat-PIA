import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsProjectsComponent } from './employee-subjects-projects.component';

describe('EmployeeSubjectsProjectsComponent', () => {
  let component: EmployeeSubjectsProjectsComponent;
  let fixture: ComponentFixture<EmployeeSubjectsProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
