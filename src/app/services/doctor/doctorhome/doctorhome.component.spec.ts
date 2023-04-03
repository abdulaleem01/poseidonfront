import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorhomeComponent } from './doctorhome.component';

describe('DoctorhomeComponent', () => {
  let component: DoctorhomeComponent;
  let fixture: ComponentFixture<DoctorhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
