import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layouts
import IntroLayout from "./layouts/IntroLayout";
import AccountCreationLayout from "./layouts/AccountCreationLayout";
import HomeLayout from "./layouts/HomeLayout";

// pages
import Login from "./pages/intro/Login";
import Signup from "./pages/intro/Signup";
import Intro from "./pages/intro/Intro";
import Home from "./pages/home/Home";
import CreateAccount from "./pages/creation/CreateAccount";
import AddChild from "./pages/creation/AddChild";
import NotFound from "./pages/NotFound";

// hooks
import useScreenSize from "./hooks/useScreenSize";
/* import { useEffect, useState } from "react"; */

// style
import "./App.css";
import "./App.mediaQueries.css"

function App() {
  /* const [data, setData] = useState(null);

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

  { data && console.log(data) } */

  const screenSize = useScreenSize();

  const routes = (
    <>
      {screenSize.width > 705 ? (
        <Route path="/" element={<IntroLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>
      ) : (
        <Route path="/" element={<IntroLayout />}>
          <Route index element={<Intro />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      )}
      <Route path="/accountcreation" element={<AccountCreationLayout />}>
        <Route index element={<CreateAccount />} />
        <Route path="addchild" element={<AddChild />} />
      </Route>
      <Route path="/home" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
