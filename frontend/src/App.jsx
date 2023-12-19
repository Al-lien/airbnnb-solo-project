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
import Home from "./pages/Home/Home";

// style
import './App.css'
import HomeLayout from "./layouts/HomeLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<IntroLayout />}>
        <Route index element={<Intro />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
