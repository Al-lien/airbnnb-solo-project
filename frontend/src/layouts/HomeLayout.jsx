import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import GeoBar from "../components/GeoBar";

import "./styles/HomeLayout.scss";
import { useState } from "react";

function HomeLayout() {
  const [location, setLocation] = useState(0);




  return (
    <>
      <div className="homeLayout">
        <GeoBar location={location} />
        <main className="homepage">
          <Outlet context={[location]} />
        </main>
        <Navbar setLocation={setLocation} />
      </div>
    </>
  );
}

export default HomeLayout;
