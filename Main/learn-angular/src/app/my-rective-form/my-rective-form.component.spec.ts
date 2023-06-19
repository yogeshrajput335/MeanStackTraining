import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRectiveFormComponent } from './my-rective-form.component';

describe('MyRectiveFormComponent', () => {
  let component: MyRectiveFormComponent;
  let fixture: ComponentFixture<MyRectiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRectiveFormComponent]
    });
    fixture = TestBed.createComponent(MyRectiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
