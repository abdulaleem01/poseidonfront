import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTdComponent } from './pagination-td.component';

describe('PaginationTdComponent', () => {
  let component: PaginationTdComponent;
  let fixture: ComponentFixture<PaginationTdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationTdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
