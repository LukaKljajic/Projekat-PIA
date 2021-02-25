import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPracticalMaterialsComponent } from './subject-practical-materials.component';

describe('SubjectPracticalMaterialsComponent', () => {
  let component: SubjectPracticalMaterialsComponent;
  let fixture: ComponentFixture<SubjectPracticalMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPracticalMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPracticalMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
