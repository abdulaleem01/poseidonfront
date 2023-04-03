import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAddTestDialogComponent } from './doc-add-test-dialog.component';

describe('DocAddTestDialogComponent', () => {
  let component: DocAddTestDialogComponent;
  let fixture: ComponentFixture<DocAddTestDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocAddTestDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocAddTestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
