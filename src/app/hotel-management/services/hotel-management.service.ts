import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HotelManagementService {
  constructor() {}

  addUserDetail(obj: any): Observable<any> {
    return of({
      name: obj.name,
      mobileNumber: obj.mobileNumber,
      chairNo: obj.chairNo,
      reservationTime: obj.reservationTime,
    });
  }

  applyFilter(obj: any): Observable<any> {
    return of(obj);
  }

  fetchUserDetail(): Observable<any> {
    return of([
      {
        name: "Sumit",
        mobileNumber: "9873979333",
        chairNo: 1,
        reservationTime: 1599315160,
      },
      {
        name: "Sunil",
        mobileNumber: "8798765498",
        chairNo: 2,
        reservationTime: 1599315199,
      },
      {
        name: "Akash",
        mobileNumber: "9876548765",
        chairNo: 3,
        reservationTime: 1599315090,
      },
      {
        name: "Sagar",
        mobileNumber: "7686686868",
        chairNo: 4,
        reservationTime: 1599315060,
      },
    ]);
  }
}
