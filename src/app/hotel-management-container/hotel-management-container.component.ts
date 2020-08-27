import { Component, OnInit } from "@angular/core";
import { AddFormComponent } from "../add-form/add-form.component";
import { MatDialog } from "@angular/material";
import { HotelManagementFilterComponent } from '../hotel-management-filter/hotel-management-filter.component';

@Component({
  selector: "app-hotel-management-container",
  templateUrl: "./hotel-management-container.component.html",
  styleUrls: ["./hotel-management-container.component.css"],
})
export class HotelManagementContainerComponent implements OnInit {
  users: any[] = [];
  chairNumbers: any[] = [...Array(10).keys()];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  addReservationForm() {
    let dialogRef = this.dialog.open(AddFormComponent, {
      width: "60vw",
      height: "70vh",
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.users.push(data);
      }
    });
  }

  openFilter(){
    let dialogRef = this.dialog.open(HotelManagementFilterComponent, {
      width: "60vw",
      height: "70vh",
      data:{userList:this.users}
    });
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.users = data;
      }
    });
  }
}
