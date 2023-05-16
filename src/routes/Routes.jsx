import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import MainContent from "../components/MainContent/MainContent";
import PrivateRoutes from "./PrivateRoutes";
import About from "../components/About/About";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import Details from "../components/Details/Details";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import SubmitDetails from "../components/SubmitDetails/SubmitDetails";

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
      {
        path: "/appointment/:id",
        element: (
          <PrivateRoutes>
            <AppointmentForm />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/doctors/${params.id}`),
      },
      {
        path: "/submit",
        element: <SubmitDetails />,
      },
    ],
  },
]);
