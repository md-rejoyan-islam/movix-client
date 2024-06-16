import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main
        className={`${pathname === "/" ? "" : "pt-[61px] "} bg-bg_primary  `}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
