import { Alert } from "react-native";
import axios from "axios";
import { deviceInfo, versionCode } from "src/constants";
import { ServerUrl } from "src/redux/helper/helper";
import * as types from "src/screens/login/constants/constants";

export function submitLoginAccount(data) {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN_ACCOUNT_ATTEMPT });

    var config = {
      method: "post",
      url: `${ServerUrl}Login/Login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        userName: data.email,
        password: data.password,
        userID: 0,
        deviceInfo: deviceInfo,
        versionCode: versionCode,
      },
    };

    return axios(config)
      .then(async function (response) {
        dispatch({
          type: types.LOGIN_ACCOUNT_SUCCESS,
          payload: response.data,
        });
        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error("error///", error); // Console Log
        Alert.alert("Error! Logging in was unsucessfull", `${error}`);
        dispatch({ type: types.LOGIN_ACCOUNT_FAIL, payload: error });
        throw new Error(error);
      });
  };
}
