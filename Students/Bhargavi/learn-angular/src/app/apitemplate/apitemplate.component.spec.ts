import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APItemplateComponent } from './apitemplate.component';

describe('APItemplateComponent', () => {
  let component: APItemplateComponent;
  let fixture: ComponentFixture<APItemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APItemplateComponent]
    });
    fixture = TestBed.createComponent(APItemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
