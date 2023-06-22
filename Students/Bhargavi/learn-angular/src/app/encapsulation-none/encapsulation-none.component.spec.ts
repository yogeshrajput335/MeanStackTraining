import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationNoneComponent } from './encapsulation-none.component';

describe('EncapsulationNoneComponent', () => {
  let component: EncapsulationNoneComponent;
  let fixture: ComponentFixture<EncapsulationNoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EncapsulationNoneComponent]
    });
    fixture = TestBed.createComponent(EncapsulationNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
