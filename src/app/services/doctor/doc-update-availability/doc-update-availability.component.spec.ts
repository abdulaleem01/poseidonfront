import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocUpdateAvailabilityComponent } from './doc-update-availability.component';

describe('DocUpdateAvailabilityComponent', () => {
  let component: DocUpdateAvailabilityComponent;
  let fixture: ComponentFixture<DocUpdateAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocUpdateAvailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocUpdateAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
