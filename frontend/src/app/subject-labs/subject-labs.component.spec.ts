import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectLabsComponent } from './subject-labs.component';

describe('SubjectLabsComponent', () => {
  let component: SubjectLabsComponent;
  let fixture: ComponentFixture<SubjectLabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectLabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
