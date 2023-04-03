import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocMedInfoEditDialogComponent } from './doc-med-info-edit-dialog.component';

describe('DocMedInfoEditDialogComponent', () => {
  let component: DocMedInfoEditDialogComponent;
  let fixture: ComponentFixture<DocMedInfoEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocMedInfoEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocMedInfoEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
