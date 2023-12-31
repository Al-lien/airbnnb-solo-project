// react-router-dom
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// contexts
import { useAuthContext } from "./hooks/useAuthContext";

// layouts
import IntroLayout from "./layouts/IntroLayout";
import AccountCreationLayout from "./layouts/AccountCreationLayout";
import HomeLayout from "./layouts/HomeLayout";

// pages
import Login from "./pages/intro/Login";
import Signup from "./pages/intro/Signup";
import Intro from "./pages/intro/Intro";
import MainPage from "./pages/home/MainPage";
import CreateAccount from "./pages/creation/CreateAccount";
import NotFound from "./pages/NotFound";

// hooks
import useScreenSize from "./hooks/useScreenSize";

// style
import "./App.scss";
import Nursery from "./pages/home/Nursery";

function App() {
  const screenSize = useScreenSize();
  const { user } = useAuthContext();

  const routes = (
    <>
      {screenSize.width > 705 ? (
        <Route
          path="/"
          element={!user ? <IntroLayout /> : <Navigate to="/home" />}
        >
          <Route path="signup" element={<Signup />} />
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>
      ) : (
        <Route
          path="/"
          element={!user ? <IntroLayout /> : <Navigate to="/home" />}
        >
          <Route index element={<Intro />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      )}

      <Route path="/accountcreation" element={<AccountCreationLayout />}>
        <Route index element={<CreateAccount />} />
      </Route>

      <Route path="/home" element={<HomeLayout />}>
        <Route index element={user ? <MainPage /> : <Navigate to="/login" />} />
        <Route path="nursery/:nurseryId" element={<Nursery />} />
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
