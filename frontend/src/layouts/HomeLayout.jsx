import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";

import "./styles/HomeLayout.scss";
import { useState } from "react";

function HomeLayout() {
  const [location, setLocation] = useState(0);




  return (
    <>
      <div className="homeLayout">
        <Topbar location={location} />
        <main className="homepage">
          <Outlet context={[location]} />
        </main>
        <Navbar setLocation={setLocation} />
      </div>
    </>
  );
}

export default HomeLayout;
