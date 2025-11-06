import { Outlet } from "react-router-dom";
import Navbar from "@app/components/Navbar";
import Footer from "@app/components/Footer";

const Layout = () => {
  return (
    <main className="flex flex-col max-w-screen">
      <Navbar />
      <div className="relative">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
