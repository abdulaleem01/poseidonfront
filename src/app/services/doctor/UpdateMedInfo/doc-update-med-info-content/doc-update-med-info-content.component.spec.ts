import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUpdateMedInfoContentComponent } from './doc-update-med-info-content.component';

describe('DocUpdateMedInfoContentComponent', () => {
  let component: DocUpdateMedInfoContentComponent;
  let fixture: ComponentFixture<DocUpdateMedInfoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocUpdateMedInfoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUpdateMedInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
