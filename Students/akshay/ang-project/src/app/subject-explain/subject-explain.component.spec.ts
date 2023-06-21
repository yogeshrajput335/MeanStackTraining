import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectExplainComponent } from './subject-explain.component';

describe('SubjectExplainComponent', () => {
  let component: SubjectExplainComponent;
  let fixture: ComponentFixture<SubjectExplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectExplainComponent]
    });
    fixture = TestBed.createComponent(SubjectExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
