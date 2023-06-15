import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablePromiseComponent } from './observable-promise.component';

describe('ObservablePromiseComponent', () => {
  let component: ObservablePromiseComponent;
  let fixture: ComponentFixture<ObservablePromiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservablePromiseComponent]
    });
    fixture = TestBed.createComponent(ObservablePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
