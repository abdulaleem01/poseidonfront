import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursePatNavbarComponent } from './nurse-pat-navbar.component';

describe('NursePatNavbarComponent', () => {
  let component: NursePatNavbarComponent;
  let fixture: ComponentFixture<NursePatNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NursePatNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NursePatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
