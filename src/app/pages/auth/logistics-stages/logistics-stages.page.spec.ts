import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsStagesPage } from './logistics-stages.page';

describe('PlanCustomersPage', () => {
  let component: LogisticsStagesPage;
  let fixture: ComponentFixture<LogisticsStagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsStagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsStagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
