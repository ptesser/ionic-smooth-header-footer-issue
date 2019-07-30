import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticStageDetailPage } from './logistic-stage-detail.page';

describe('LogisticStageDetailPage', () => {
  let component: LogisticStageDetailPage;
  let fixture: ComponentFixture<LogisticStageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticStageDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticStageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
