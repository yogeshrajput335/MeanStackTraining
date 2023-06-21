import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyInjecComponent } from './dependency-injec.component';

describe('DependencyInjecComponent', () => {
  let component: DependencyInjecComponent;
  let fixture: ComponentFixture<DependencyInjecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyInjecComponent]
    });
    fixture = TestBed.createComponent(DependencyInjecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
