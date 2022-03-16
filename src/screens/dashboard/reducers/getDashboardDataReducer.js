import * as types from "../constants/constants";

let initial = {
  loading: false,
  data: null,
  error: null,
};
export default function (state = initial, action) {
  switch (action.type) {
    case types.GET_DASHBOARD_DATA_ALL_ATTEMPT:
      return { ...state, loading: true };
    case types.GET_DASHBOARD_DATA_ALL_SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case types.GET_DASHBOARD_DATA_ALL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
