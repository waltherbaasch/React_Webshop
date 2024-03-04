
import CookieAcceptancePopup from "./CookieAcceptancePopup"; // Assuming it's in the same directory
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import TopBar from "./TopBar";

const MainLayout = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
      <CookieAcceptancePopup />
      <Sidebar />
      <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr' }}>
        <TopBar />
        <div>
          <Outlet />
          <Footer />
        </div>
      </div>
   
    </div>
  );
};

export default MainLayout;
