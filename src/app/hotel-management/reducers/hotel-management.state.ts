export interface HotelManagement {
  userData: null | undefined | User[];
  error: null | undefined | string;
  message: null | undefined | string;
}

export const intialHotelManagementState: HotelManagement = {
  userData: [],
  error: "",
  message: "",
};

export interface User {
  name: null | undefined | string;
  mobileNumber: null | undefined | number;
  chairNo: null | undefined | number;
  reservationTime: null | undefined | number;
}

export const intialUserState: User = {
  name: null,
  mobileNumber: null,
  chairNo: null,
  reservationTime: null,
};
