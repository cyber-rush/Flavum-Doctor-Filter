import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkAuth, createUser, loginUser } from "./authAPI";
import {
  decode,
  getRole,
  getToken,
  getUser,
  removeRole,
  removeToken,
  removeUser,
  setRole,
  setToken,
  setUser,
} from "../../utils/HelperFunctions";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const initialState = {
  token: getToken() || null, // this should only contain user identity => 'id'/'roleName'
  user: getUser(),
  role: getRole() || null,
  // userChecked: false,
  loading: false,
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    try {
      // toast.success("Successfully toasted!");
      const response = await createUser(userData);
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(<b>{error}</b>);
      // toast.error(<b>Server Error. Please reload the page and try again.</b>);
      return error;
    }
  }
);

// export const loginUserWithTokenAsync = createAsyncThunk(
//   "user/loginUserWithToken",
//   async (token, { rejectWithValue }) => {
//     try {
//       if (token) return token;
//       else return;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }

//     // The value we return becomes the `fulfilled` action payload
//   }
// );

export const loginUserAsync = createAsyncThunk(
  "user/loginUser",
  async (loginInfo) => {
    try {
      const response = await loginUser(loginInfo);
      console.log("loginAsync", response);
      return response;
    } catch (error) {
      <Navigate to="/login" replace={true}></Navigate>;
      toast.error(<b>Server Error. Please reload the page and try again.</b>);
      console.log("error", error);
      return error;
    }

    // The value we return becomes the `fulfilled` action payload
  }
);

// export const checkAuthAsync = createAsyncThunk("user/checkAuth", async () => {
//   try {
//     const response = await checkAuth();
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });

export const checkAuthAsync = createAsyncThunk(
  "user/checkAuth",
  async (token) => {
    try {
      if (token) {
        const response = await checkAuth(token);
        const { sub, firstName, userId, roleName } = await decode(token);
        return { token, sub, firstName, userId, roleName };
      }
    } catch (error) {
      <Navigate to="/login" replace={true}></Navigate>;
      removeToken();
      toast.error(<b>Login expired, Please try logging in again</b>);
      console.log(error);
    }
  }
);

export const signOutAsync = createAsyncThunk("user/signOut", async () => {
  removeToken();
  removeRole();
  removeUser();
  <Navigate to="/login" replace={true}></Navigate>;
  toast.success(<b>Signed Out, see you soon!</b>);

  // const response = await signOut();

  // The value we return becomes the `fulfilled` action payload
  return;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createUserAsync.rejected, (state) => {
        state.error = action.payload;
        state.loading = false;
      })
      // .addCase(loginUserWithTokenAsync.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(loginUserWithTokenAsync.fulfilled, (state, action) => {
      //   state.token = setToken(token);
      //   // state.auth = { sub, roleName };
      //   state.loading = false;
      // })
      .addCase(loginUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        const { token, data, role } = action.payload;
        state.user = data;
        state.token = token;
        state.role = role;
        // state.userChecked = true;
        state.loading = false;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.loading = false;
        // state.userChecked = false;
        state.error = action.payload;
      })
      .addCase(checkAuthAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthAsync.fulfilled, (state, action) => {
        // const { sub, roleName } = action.payload;
        // state.token = getToken();
        // state.auth = { sub, roleName };
        // state.userChecked = true;
        // state.loading = false;
        const { token, sub, firstName, userId, roleName } = action.payload;
        state.token = token;
        state.auth = { sub, firstName, userId, roleName };
        state.userChecked = true;
        state.loading = false;
      })
      .addCase(checkAuthAsync.rejected, (state, action) => {
        state.loading = false;
        state.userChecked = false;
      })
      .addCase(signOutAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(signOutAsync.fulfilled, (state, action) => {
        state.userChecked = false;
        state.token = null;
        state.auth = null;
        state.loading = false;
      });
  },
});

export const selectLoading = (state) => state.auth.loading;
export const selectloggedInUserToken = (state) => state.auth.token;
export const selectUserChecked = (state) => state.auth.userChecked;
export const selectAuth = (state) => state.auth.auth;
export const selectError = (state) => state.auth.error;

export default authSlice.reducer;
