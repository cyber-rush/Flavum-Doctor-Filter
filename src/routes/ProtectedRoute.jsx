import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";

import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token, loading, user } = useSelector((state) => state.auth);

  if (loading) {
    return <Loading />;
  }

  if (!token) {
    // state={{ from: location }}
    // toast.error(<b>Please Login first...</b>);
    return <Navigate to={"/login"} state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
