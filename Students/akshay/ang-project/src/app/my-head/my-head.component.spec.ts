import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeadComponent } from './my-head.component';

describe('MyHeadComponent', () => {
  let component: MyHeadComponent;
  let fixture: ComponentFixture<MyHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyHeadComponent]
    });
    fixture = TestBed.createComponent(MyHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
