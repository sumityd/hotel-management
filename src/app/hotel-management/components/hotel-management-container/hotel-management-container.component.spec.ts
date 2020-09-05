import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManagementContainerComponent } from './hotel-management-container.component';

describe('HotelManagementContainerComponent', () => {
  let component: HotelManagementContainerComponent;
  let fixture: ComponentFixture<HotelManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelManagementContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
