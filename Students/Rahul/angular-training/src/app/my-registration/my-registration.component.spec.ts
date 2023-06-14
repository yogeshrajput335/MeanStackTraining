import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRegistrationComponent } from './my-registration.component';

describe('MyRegistrationComponent', () => {
  let component: MyRegistrationComponent;
  let fixture: ComponentFixture<MyRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRegistrationComponent]
    });
    fixture = TestBed.createComponent(MyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
