import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfqTableComponent } from './rfq-table.component';

describe('RfqTableComponent', () => {
  let component: RfqTableComponent;
  let fixture: ComponentFixture<RfqTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RfqTableComponent]
    });
    fixture = TestBed.createComponent(RfqTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
