import Routers from "../routes/Routers";
import Footer from "../components/Footer/Footer";
import AnimatedPages from "../components/common/AnimatedPages";
import Navbar from "../components/Navbar/Navbar";
import ScrollToTop from "../components/Misc/ScrollToTop";
import ScrollToTopBtn from "../components/Misc/ScrollToTopBtn";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTopBtn />
      <Navbar />
      <Toaster position="top-center" reverseOrder={true} />
      <main>
        <AnimatedPages>
          <Routers />
        </AnimatedPages>
      </main>
      <Footer />
    </>
  );
}
