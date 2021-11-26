import React from "react";
// import Main from "@/layout/main";
// import Login from "@/page/login";
// import Home from "@/page/home";

const routes = [
  {
    path: "/login",
    exact: true,
    title: "登录",
    component: React.lazy(() => import("@/page/login")),
  },
  {
    path: "/",
    component: React.lazy(() => import("@/layout/main")),
    routes: [
      {
        path: "/",
        exact: true,
        title: "首页",
        component: React.lazy(() => import("@/page/home")),
      },
    ],
  },
];

export default routes;
