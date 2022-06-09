import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementPerformanceComponent } from './settlement-performance.component';

describe('SettlementPerformanceComponent', () => {
  let component: SettlementPerformanceComponent;
  let fixture: ComponentFixture<SettlementPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
