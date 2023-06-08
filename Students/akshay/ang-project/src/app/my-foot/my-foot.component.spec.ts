import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFootComponent } from './my-foot.component';

describe('MyFootComponent', () => {
  let component: MyFootComponent;
  let fixture: ComponentFixture<MyFootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFootComponent]
    });
    fixture = TestBed.createComponent(MyFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
