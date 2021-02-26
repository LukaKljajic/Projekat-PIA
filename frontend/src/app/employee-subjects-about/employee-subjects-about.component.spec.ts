import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsAboutComponent } from './employee-subjects-about.component';

describe('EmployeeSubjectsAboutComponent', () => {
  let component: EmployeeSubjectsAboutComponent;
  let fixture: ComponentFixture<EmployeeSubjectsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
