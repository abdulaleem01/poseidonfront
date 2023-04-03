import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUpdateMedInfoComponent } from './doc-update-med-info.component';

describe('DocUpdateMedInfoComponent', () => {
  let component: DocUpdateMedInfoComponent;
  let fixture: ComponentFixture<DocUpdateMedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocUpdateMedInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUpdateMedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
