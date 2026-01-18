import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshkereComponent } from './eshkere.component';

describe('EshkereComponent', () => {
  let component: EshkereComponent;
  let fixture: ComponentFixture<EshkereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EshkereComponent]
    });
    fixture = TestBed.createComponent(EshkereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
