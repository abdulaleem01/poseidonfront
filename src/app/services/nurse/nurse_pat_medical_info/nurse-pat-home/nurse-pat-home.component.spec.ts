import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatHomeComponent } from './nurse-pat-home.component';

describe('NursePatHomeComponent', () => {
  let component: NursePatHomeComponent;
  let fixture: ComponentFixture<NursePatHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursePatHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePatHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
