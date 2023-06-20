import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExpainComponent } from './subject-expain.component';

describe('SubjectExpainComponent', () => {
  let component: SubjectExpainComponent;
  let fixture: ComponentFixture<SubjectExpainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectExpainComponent]
    });
    fixture = TestBed.createComponent(SubjectExpainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
