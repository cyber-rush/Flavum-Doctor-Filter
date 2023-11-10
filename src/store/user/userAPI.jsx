import { useSelector } from "react-redux";
import api from "../../services/api";
import { getToken } from "../../utils/HelperFunctions";

// const { auth } = useSelector((state) => {
//   state.auth;
// });

export async function fetchLoggedInUser() {
  try {
    const response = await api.get(`/user/details/${userId}`);
    if (response.status === 200) {
      console.log("userdata = ", response.data);
      return response.data.data;
    } else {
      throw response.statusText;
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchLoggedInDoctor() {
  try {
    const response = await api.get(`/doctors/profile/me`);
    if (response.status === 200) {
      console.log("userdata = ", response.data);
      return response.data.data;
    } else {
      throw error;
    }
  } catch (error) {
    throw error.response.data.message;
  }
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/users/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    //TODO : on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function updateDoctor(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/doctors/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    //TODO : on server it will only return some info of user (not password)
    resolve({ data });
  });
}
