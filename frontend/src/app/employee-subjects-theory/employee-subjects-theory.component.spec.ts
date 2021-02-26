import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubjectsTheoryComponent } from './employee-subjects-theory.component';

describe('EmployeeSubjectsTheoryComponent', () => {
  let component: EmployeeSubjectsTheoryComponent;
  let fixture: ComponentFixture<EmployeeSubjectsTheoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSubjectsTheoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSubjectsTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
