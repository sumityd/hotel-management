import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManagementFilterComponent } from './hotel-management-filter.component';

describe('HotelManagementFilterComponent', () => {
  let component: HotelManagementFilterComponent;
  let fixture: ComponentFixture<HotelManagementFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelManagementFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
