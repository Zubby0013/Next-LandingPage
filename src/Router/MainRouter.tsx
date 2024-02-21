import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import HomeScreen from "../LandingPage1/Homescreen/HomeScreen";
import Feature from "../LandingPage1/Feature";
import Contact from "../LandingPage1/Contact";
import About from "../LandingPage1/About";
import ABetter from "../LandingPage1/Homescreen/ABetter";
import Everything from "../LandingPage1/Homescreen/Everything";
import StartUsing from "../LandingPage1/Homescreen/StartUsing";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: '/features',
        element: <ABetter/>
      },
      {
        index: true,
        path: '/contact',
        element: <Contact/>
      },
      {
        index: true,
        path: '/about',
        element: <About/>
      },
      {
        index: true,
        path: '/service',
        element: <StartUsing/>
      },
    ],
  },
]);
