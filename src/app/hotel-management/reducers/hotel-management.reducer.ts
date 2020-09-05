import {
  HotelManagement,
  intialHotelManagementState,
} from "../reducers/hotel-management.state";
import {
  HotelActionTypes,
  HotelActions,
} from "../actions/hotel-management.actions";

export function HotelReducer(
  state: HotelManagement = intialHotelManagementState,
  action: HotelActions
) {
  switch (action.type) {
    case HotelActionTypes.FETCH_USER_DETAIL_SUCCESS: {
      console.log('called fetch data',action.payload);
      return {
        ...state,
        userData: action.payload,
        message: null,
        error: null,
      };
    }

    case HotelActionTypes.FETCH_USER_DETAIL_FAILED: {
      return {
        ...state,
        message: null,
        error: action.payload,
      };
    }

    case HotelActionTypes.ADD_USER_DETAIL_SUCCESS: {
      return {
        ...state,
        userData: [...state.userData, action.payload],
        message: "Add User Detail Successfully",
        error: null,
      };
    }

    case HotelActionTypes.ADD_USER_DETAIL_FAILED: {
      return {
        ...state,
        message: null,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
