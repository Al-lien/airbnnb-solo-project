import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

// layouts
import IntroLayout from "./layouts/IntroLayout";

// pages
import Login from "./pages/intro/Login";
import Signup from "./pages/intro/Signup";
import Intro from "./pages/intro/Intro";
import Home from "./pages/home/Home";

// style
import './App.css'
import HomeLayout from "./layouts/HomeLayout";
import useScreenSize from "./hooks/useScreenSize";
import { useEffect, useState } from "react";




function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/api/parents");
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }

    }
    fetchData();
  }, [])

  { data && console.log(data) }

  const screenSize = useScreenSize();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        {screenSize.width > 705 ?

          <Route path="/" element={<IntroLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route index element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          :
          <Route path="/" element={<IntroLayout />}>
            <Route index element={<Intro />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        }

        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
      </>
    )
  );




  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
