import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeApiComponent } from './consume-api.component';

describe('ConsumeApiComponent', () => {
  let component: ConsumeApiComponent;
  let fixture: ComponentFixture<ConsumeApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumeApiComponent]
    });
    fixture = TestBed.createComponent(ConsumeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
