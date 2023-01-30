import DashboardPage from "@/container/Dashboard";

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
];
