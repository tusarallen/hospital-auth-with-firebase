import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import MainContent from "../components/MainContent/MainContent";
import PrivateRoutes from "./PrivateRoutes";
import About from "../components/About/About";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Details from "../components/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        ),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/details",
        element: (
          <PrivateRoutes>
            <Details />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
