import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hotel-management-list",
  templateUrl: "./hotel-management-list.component.html",
  styleUrls: ["./hotel-management-list.component.css"],
})
export class HotelManagementListComponent implements OnInit {
  @Input() usersList: any[];
  constructor() {}

  ngOnInit() {}
}
