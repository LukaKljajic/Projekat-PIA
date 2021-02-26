import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStudentComponent } from './change-student.component';

describe('ChangeStudentComponent', () => {
  let component: ChangeStudentComponent;
  let fixture: ComponentFixture<ChangeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
