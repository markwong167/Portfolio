import { HANDLE_LOGIN } from "../actionTypes";
const initialState = {
  username: "",
  authorized: false,
  loginProcessing: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      console.log(action);
      return { ...state, username: action.payload.email, authorized: true };
    default:
      return state;
  }
};
