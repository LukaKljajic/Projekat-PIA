import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsLabsComponent } from './employee-subjects-labs.component';

describe('EmployeeSubjectsLabsComponent', () => {
  let component: EmployeeSubjectsLabsComponent;
  let fixture: ComponentFixture<EmployeeSubjectsLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
