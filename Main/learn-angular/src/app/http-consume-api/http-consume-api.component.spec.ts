import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpConsumeApiComponent } from './http-consume-api.component';

describe('HttpConsumeApiComponent', () => {
  let component: HttpConsumeApiComponent;
  let fixture: ComponentFixture<HttpConsumeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpConsumeApiComponent]
    });
    fixture = TestBed.createComponent(HttpConsumeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
