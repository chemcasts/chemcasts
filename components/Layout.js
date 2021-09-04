import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Drawer from "./Drawer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
