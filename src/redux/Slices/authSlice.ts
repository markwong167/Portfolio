import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  password: string;
  completed: Boolean;
  authorized: Boolean;
}

const initialState: AuthState = {
  email: "",
  password: "",
  completed: true,
  authorized: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAdded: (state, action) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.completed = false;
      state.authorized = true;
    },
    loggedOut: () => initialState,
  },
});
export const { loginAdded, loggedOut } = authSlice.actions;

export default authSlice.reducer;
