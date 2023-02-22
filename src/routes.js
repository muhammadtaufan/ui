import DashboardPage from "@/container/Dashboard";
import LandingPage from "@/container/Landing";
import AboutPage from "@/container/About";

export const routes = [
  {
    path: "/dashboard",
    pathname: "dashboard",
    name: "Dashboard Page",
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
    name: "Landing Page",
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
