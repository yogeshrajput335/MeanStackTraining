import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReactiveFormComponent } from './my-reactive-form.component';

describe('MyReactiveFormComponent', () => {
  let component: MyReactiveFormComponent;
  let fixture: ComponentFixture<MyReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReactiveFormComponent]
    });
    fixture = TestBed.createComponent(MyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
