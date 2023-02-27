import DashboardPage from "@/container/Dashboard";
import LandingPage from "@/container/Landing";
import AboutPage from "@/container/About";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    pathname: "landing",
    name: "Landing Page",
    index: false,
    children: [
      {
        elements: DashboardPage,
        index: true,
      },
    ],
  },
  {
    path: "/home",
    pathname: "home",
    name: "Home Page",
    index: false,
    children: [
      {
        elements: LandingPage,
        index: true,
      },
    ],
  },
  {
    path: "/about",
    pathname: "about",
    name: "About Page",
    index: false,
    children: [
      {
        elements: AboutPage,
        index: true,
      },
    ],
  },
];
