import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading/Loading";
import ProtectedRoute from "./ProtectedRoute";
import Test from "../pages/ZohoBookAppointment";
import ZohoBookAppointment from "../pages/ZohoBookAppointment";
import ZohoMyAppointments from "../pages/ZohoMyAppointments";

const Contact = lazy(() => import("../pages/Contact"));
const KnowledgeCentre = lazy(() => import("../pages/KnowledgeCentre"));
const Team = lazy(() => import("../pages/Team"));
const KCFaq = lazy(() => import("../pages/KCFaq"));
const NotFound = lazy(() => import("../pages/404"));
const Policies = lazy(() => import("../pages/Policies"));
const Doctors = lazy(() => import("../pages/Doctors/Doctors"));
const DoctorDetails = lazy(() => import("../pages/Doctors/DoctorDetails"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const ProfileSettings = lazy(() => import("../pages/User/ProfileSettings"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const ComingSoon = lazy(() => import("../pages/ComingSoon"));

const Home = lazy(() => import("../pages/Home"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="doctors" element={<ComingSoon />} /> */}
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:id" element={<DoctorDetails />} />
          <Route path="knowledge-centre" element={<KnowledgeCentre />} />
          <Route path="services" element={<ComingSoon />} />
          <Route path="knowledge-centre/:id" element={<KCFaq />} />
          <Route path="team" element={<Team />} />
          <Route path="book-appointment" element={<ZohoBookAppointment />} />
          <Route path="my-appointments" element={<ZohoMyAppointments />} />

          {/* <iframe width='100%' height='750px' src='https://flavumhealth.zohobookings.in/portal-embed#/customer/174990000000155020' frameborder='0' allowfullscreen='' > </iframe> */}

          <Route path="terms-and-conditions" element={<Policies />} />
          <Route path="privacy-policy" element={<Policies />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="refund-policy" element={<Policies />} />
          <Route path="loading" element={<Loading />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Signup />} />
          <Route path="test" element={<Test />} />

          <Route path="coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="user"
            element={
              <ProtectedRoute>
                <ProfileSettings />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
