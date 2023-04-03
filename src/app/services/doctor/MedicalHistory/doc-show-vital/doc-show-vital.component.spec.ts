import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocShowVitalComponent } from './doc-show-vital.component';

describe('DocShowVitalComponent', () => {
  let component: DocShowVitalComponent;
  let fixture: ComponentFixture<DocShowVitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocShowVitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocShowVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
