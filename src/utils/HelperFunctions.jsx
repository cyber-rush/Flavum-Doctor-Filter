import jwt_decode from "jwt-decode";
import {
  DOCTOR,
  PATIENT,
  ROLE_DOCTOR,
  ROLE_PATIENT,
} from "../assets/data/roles";

export const decode = async (accessToken) => {
  if (accessToken) {
    try {
      const decodedToken = await jwt_decode(accessToken);

      if (decodedToken) {
        const { sub, firstName, userId, roleName } = decodedToken;
        // let role = null;
        // switch (roleName) {
        //   case ROLE_PATIENT:
        //     role = PATIENT;
        //     console.log(role);
        //     break;
        //   case ROLE_DOCTOR:
        //     role = DOCTOR;
        //     break;
        //   default:
        //     role = null;
        // }
        return { sub, firstName, userId, roleName };
      } else {
        console.log("Failed to decode token");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = () => {
  return localStorage.getItem("user") != undefined
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const removeRole = () => {
  localStorage.removeItem("role");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const setRole = (role) => {
  localStorage.setItem("role", role);
};
