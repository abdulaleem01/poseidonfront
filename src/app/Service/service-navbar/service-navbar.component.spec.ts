import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNavbarComponent } from './service-navbar.component';

describe('ServiceNavbarComponent', () => {
  let component: ServiceNavbarComponent;
  let fixture: ComponentFixture<ServiceNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
