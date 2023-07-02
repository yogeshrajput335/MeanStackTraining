import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdirEmployeeComponent } from './edir-employee.component';

describe('EdirEmployeeComponent', () => {
  let component: EdirEmployeeComponent;
  let fixture: ComponentFixture<EdirEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdirEmployeeComponent]
    });
    fixture = TestBed.createComponent(EdirEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
