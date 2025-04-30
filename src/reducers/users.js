// import React from "react";
import {
  GET_USERS_LIST,
  GET_USERS_DETAIL,
  POST_USERS_CREATE,
} from "../actions/userAction";
var initialState = {
  getUsersList: [],
  getUsersDetail: false,
  errorUsersDetail: false,
  title: "Afrizal",
  errorUsersList: false,
  getResponDataUsers: false,
  errorResponDataUsers: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return {
        ...state,
        getUsersList: action.payload.data,
        errorUsersList: action.payload.errorMessage,
      };

    case GET_USERS_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorUsersDetail: action.payload.errorMessage,
      };

    case POST_USERS_CREATE:
      return {
        ...state,
        getResponDataUsers: action.payload.data,
        errorResponDataUsers: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default usersReducer;
