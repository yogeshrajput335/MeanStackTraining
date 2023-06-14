import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAboutComponent } from './my-about.component';

describe('MyAboutComponent', () => {
  let component: MyAboutComponent;
  let fixture: ComponentFixture<MyAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAboutComponent]
    });
    fixture = TestBed.createComponent(MyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
