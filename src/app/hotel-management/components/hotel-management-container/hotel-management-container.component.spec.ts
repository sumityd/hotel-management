import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HotelManagementContainerComponent } from "./hotel-management-container.component";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "src/app/angular-material.module";

describe("HotelManagementContainerComponent", () => {
  let component: HotelManagementContainerComponent;
  let fixture: ComponentFixture<HotelManagementContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        AngularMaterialModule,
      ],
      declarations: [HotelManagementContainerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelManagementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
