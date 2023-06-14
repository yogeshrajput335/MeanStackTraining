import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactinfoComponent } from './my-contactinfo.component';

describe('MyContactinfoComponent', () => {
  let component: MyContactinfoComponent;
  let fixture: ComponentFixture<MyContactinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyContactinfoComponent]
    });
    fixture = TestBed.createComponent(MyContactinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
