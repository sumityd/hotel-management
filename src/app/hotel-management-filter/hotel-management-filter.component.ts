import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-hotel-management-filter",
  templateUrl: "./hotel-management-filter.component.html",
  styleUrls: ["./hotel-management-filter.component.css"],
})
export class HotelManagementFilterComponent implements OnInit {
  chairNumbers: any[] = [...Array(10).keys()];
  reservationTime: any;
  chairNo: any;

  constructor(
    public dialogRef: MatDialogRef<HotelManagementFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  selectedDate(event: any) {
    this.reservationTime = new Date(event.value).getTime();
  }

  dialogClose() {
    this.dialogRef.close();
  }

  saveDetails() {
    if (this.chairNo) {
      this.data.userList = this.data.userList.filter(
        (item: any) => item.chairNo == this.chairNo
      );
    }

    if (this.reservationTime) {
      this.data.userList = this.data.userList.filter(
        (item: any) => item.reservationTime >= this.reservationTime
      );
    }

    this.dialogRef.close(this.data.userList);
  }
}
