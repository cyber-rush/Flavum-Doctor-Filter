import { useEffect } from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { getToken } from "./utils/HelperFunctions";
import { checkAuthAsync } from "./store/auth/authSlice";
import { fetchLoggedInUserAsync, selectUserInfo } from "./store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import 'rsuite/dist/rsuite.min.css';

function App() {
  const dispatch = useDispatch();
  // const token = getToken();
  const userInfo = useSelector(selectUserInfo);
  const { user, token, role, loading } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   const token = getToken();
  //   if (token) {
  //     dispatch(checkAuthAsync(token));
  //   }
  // }, [dispatch, token]);

  // useEffect(() => {
  //   if (auth) {
  //     console.log("app with auth", auth.userId);
  //     dispatch(fetchLoggedInUserAsync(auth.userId));
  //   }
  // }, [dispatch, auth]);

  return <Layout />;
}

export default App;
