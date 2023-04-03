import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeContentComponent } from './main-home-content.component';

describe('MainHomeContentComponent', () => {
  let component: MainHomeContentComponent;
  let fixture: ComponentFixture<MainHomeContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainHomeContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
