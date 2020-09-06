import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HotelManagementFilterComponent } from "./hotel-management-filter.component";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("HotelManagementFilterComponent", () => {
  let component: HotelManagementFilterComponent;
  let fixture: ComponentFixture<HotelManagementFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, AngularMaterialModule, BrowserAnimationsModule],
      declarations: [HotelManagementFilterComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
