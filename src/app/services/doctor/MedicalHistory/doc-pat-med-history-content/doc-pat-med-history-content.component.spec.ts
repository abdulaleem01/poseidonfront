import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPatMedHistoryContentComponent } from './doc-pat-med-history-content.component';

describe('DocPatMedHistoryContentComponent', () => {
  let component: DocPatMedHistoryContentComponent;
  let fixture: ComponentFixture<DocPatMedHistoryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPatMedHistoryContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocPatMedHistoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
