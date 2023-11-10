import toast from "react-hot-toast";
import api from "../../services/api";
import {
  decode,
  getToken,
  removeToken,
  setRole,
  setToken,
  setUser,
} from "../../utils/HelperFunctions";
import { Navigate } from "react-router-dom";

export async function createUser(userData) {
  try {
    const response = await toast.promise(api.post("/auth/register", userData), {
      loading: "Creating a user...",
      success: <b>Signup Successfull</b>,
      error: <b>Signup Failed</b>,
    });

    if (response.status === 201) {
      toast.success(<b>User Successfully registered!</b>);
      <Navigate to="/login" replace></Navigate>;
      return response.data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error.response.data;
  }
}

export async function loginUser(loginInfo) {
  try {
    const response = await toast.promise(api.post("/auth/login", loginInfo), {
      loading: "Logging in...",
      success: <b>Login Successfull</b>,
      error: <b>Login Failed</b>,
    });

    if (response.status === 200) {
      const { token, data, role } = response.data;
      console.log("token", token, "data", data, "role", role);
      setToken(token);
      setUser(data);
      setRole(role);
      // toast.success(<b>Login Successfull</b>);
      return response.data;
    } else {
      // // <Navigate to="/login"></Navigate>;
      // toast.error("Login Failed");

      throw error;
    }
  } catch (error) {
    throw error.response.data.message;
  }
}

export async function checkAuth(token) {
  try {
    const response = await api("/auth/checkAuth");
    if (response.status === 200) {
      setToken(token);
      const auth = decode(getToken());
      return auth;
    } else {
      // <Navigate to="/login"></Navigate>;
      // removeToken();
      // toast.error("Login expired, Please try logging in again");
      throw response.statusText;
    }
  } catch (error) {
    throw error;
  }
}

// export async function signOut() {
//   try {
//     removeToken();
//     <Navigate to="/login" replace></Navigate>;
//     const response = await api.get("/auth/logout");

//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw response.statusText;
//     }
//   } catch (error) {
//     throw error;
//   }
// }
