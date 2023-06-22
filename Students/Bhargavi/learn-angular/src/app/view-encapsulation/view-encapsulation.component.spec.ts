import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationComponent } from './view-encapsulation.component';

describe('ViewEncapsulationComponent', () => {
  let component: ViewEncapsulationComponent;
  let fixture: ComponentFixture<ViewEncapsulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEncapsulationComponent]
    });
    fixture = TestBed.createComponent(ViewEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
