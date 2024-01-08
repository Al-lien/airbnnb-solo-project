// react
import { useState } from "react";

// react-router
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

// styles
import "./styles/HomeLayout.scss";

function HomeLayout() {
  const [location, setLocation] = useState(0);

  return (
    <>
      <div className="homeLayout">
        <Topbar location={location} />
        <main className="homepage">
          <Outlet context={{ location }} />
        </main>
        <Navbar setLocation={setLocation} />
      </div>
    </>
  );
}

export default HomeLayout;
