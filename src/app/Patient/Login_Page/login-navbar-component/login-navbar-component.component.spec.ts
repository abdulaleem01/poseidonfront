import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNavbarComponentComponent } from './login-navbar-component.component';

describe('LoginNavbarComponentComponent', () => {
  let component: LoginNavbarComponentComponent;
  let fixture: ComponentFixture<LoginNavbarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNavbarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNavbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
