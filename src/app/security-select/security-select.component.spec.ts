import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySelectComponent } from './security-select.component';

describe('SecuritySelectComponent', () => {
  let component: SecuritySelectComponent;
  let fixture: ComponentFixture<SecuritySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
