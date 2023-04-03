import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUpdateMedInfoTableComponent } from './doc-update-med-info-table.component';

describe('DocUpdateMedInfoTableComponent', () => {
  let component: DocUpdateMedInfoTableComponent;
  let fixture: ComponentFixture<DocUpdateMedInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocUpdateMedInfoTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUpdateMedInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
