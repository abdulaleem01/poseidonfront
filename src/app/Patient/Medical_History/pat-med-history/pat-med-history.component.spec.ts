import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatMedHistoryComponent } from './pat-med-history.component';

describe('PatMedHistoryComponent', () => {
  let component: PatMedHistoryComponent;
  let fixture: ComponentFixture<PatMedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatMedHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatMedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
