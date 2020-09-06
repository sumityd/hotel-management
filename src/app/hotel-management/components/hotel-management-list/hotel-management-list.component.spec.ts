import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelManagementListComponent } from './hotel-management-list.component';

describe('HotelManagementListComponent', () => {
  let component: HotelManagementListComponent;
  let fixture: ComponentFixture<HotelManagementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelManagementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
