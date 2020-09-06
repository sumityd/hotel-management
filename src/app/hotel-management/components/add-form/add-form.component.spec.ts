import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AddFormComponent } from "./add-form.component";
import { By } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { HotelManagementPipe } from '../../pipes/hotel-management.pipe';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';

describe("AddFormComponent", () => {
  let component: AddFormComponent;
  let fixture: ComponentFixture<AddFormComponent>;
  let nameEl = fixture.debugElement.query(By.css("input[id=name]"));
  let mobNumberNameEl = fixture.debugElement.query(
    By.css("input[id=mobNumber]")
  );
  let saveBtnEl = fixture.debugElement.query(By.css("input[id=saveBtn]"));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        AngularMaterialModule,
        ReactiveFormsModule],
      declarations: [AddFormComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Entering value in input form and emit output value", () => {
    let user: any;
    nameEl.nativeElement.value = "Sumit Yadav";
    mobNumberNameEl.nativeElement.value = "8979797997";

    // component.saveDetails.subscribe(value=> user = value)

    saveBtnEl.triggerEventHandler("click", null);

    expect(user.name).toBe("Sumit Yadav");
    expect(user.mobileNumber).toBe("8979797997");
  });


  it("should disable the button when user is empty", () => {
    fixture.detectChanges();
    expect(saveBtnEl.nativeElement.disabled).toBeTruthy();
  });

  it("should enable button when user name is not empty", () => {
    component.user.name = "Sumit Yadav";
    fixture.detectChanges();
    expect(saveBtnEl.nativeElement.disabled).toBeFalsy();
  });
});
