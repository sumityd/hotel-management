import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { User, intialUserState } from "../../reducers/hotel-management.state";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.css"],
})
export class AddFormComponent implements OnInit {
  user: User = { ...intialUserState };

  chairNumbers: any[] = [...Array(10).keys()];

  constructor(public dialogRef: MatDialogRef<AddFormComponent>) {}

  ngOnInit() {}

  numbersOnly(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  selectedDate(event: any) {
    this.user.reservationTime = new Date(event.value).getTime();
  }

  dialogClose() {
    this.dialogRef.close();
  }

  saveDetails() {
    this.dialogRef.close(this.user);
  }
}
