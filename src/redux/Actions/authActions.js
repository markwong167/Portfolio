import { HANDLE_LOGIN } from "../actionTypes";
import axios from "axios";
export const handleLogin = (content) => {
  return (dispatch) => {
    //FRONTEND TEMPLATE ONLY. REMOVE THIS AND UNCOMMENT & FIX BELOW WHEN CONNECTED TO BACKEND
    console.log(content);
    if (content.email === "asdf" && content.password === "qwer") {
      console.log("yes");
      dispatch(login(content));
    }

    // dispatch(loginProcessing());
    // axios
    //   .post("https://6q7yl104k.sse.codesandbox.io/login", content)
    //   .then(res => {
    //     debugger;
    //     dispatch(login(content));
    //   })
    //   .catch(error => {
    //     debugger;
    //     console.log(error);
    //   });
  };
};
const loginProcessing = () => {
  return {
    type: LOGINPROCESSING,
    payload: "",
  };
};

const login = (content) => {
  return {
    type: HANDLE_LOGIN,
    payload: content,
  };
};
