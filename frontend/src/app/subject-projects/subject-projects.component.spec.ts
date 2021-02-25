import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectProjectsComponent } from './subject-projects.component';

describe('SubjectProjectsComponent', () => {
  let component: SubjectProjectsComponent;
  let fixture: ComponentFixture<SubjectProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
