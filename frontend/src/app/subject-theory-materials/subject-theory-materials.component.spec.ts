import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTheoryMaterialsComponent } from './subject-theory-materials.component';

describe('SubjectTheoryMaterialsComponent', () => {
  let component: SubjectTheoryMaterialsComponent;
  let fixture: ComponentFixture<SubjectTheoryMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectTheoryMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTheoryMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
