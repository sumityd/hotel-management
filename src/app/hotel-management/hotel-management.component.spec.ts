import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HotelManagementComponent } from "./hotel-management.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("HotelManagementComponent", () => {
  let component: HotelManagementComponent;
  let fixture: ComponentFixture<HotelManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HotelManagementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
