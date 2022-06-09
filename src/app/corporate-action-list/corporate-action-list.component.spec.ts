import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateActionListComponent } from './corporate-action-list.component';

describe('CorporateActionListComponent', () => {
  let component: CorporateActionListComponent;
  let fixture: ComponentFixture<CorporateActionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateActionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
