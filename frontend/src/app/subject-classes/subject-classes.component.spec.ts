import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectClassesComponent } from './subject-classes.component';

describe('SubjectClassesComponent', () => {
  let component: SubjectClassesComponent;
  let fixture: ComponentFixture<SubjectClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
