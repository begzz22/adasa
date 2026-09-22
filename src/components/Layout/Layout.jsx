import { Outlet } from "react-router-dom";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;
