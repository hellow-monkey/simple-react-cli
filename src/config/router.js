import Main from "@/layout/main";
import Home from "@/page/home";
import Detail from "@/page/detail";

const routes = [
  {
    path: "/",
    component: Main,
    routes: [
      {
        path: "/",
        exact: true,
        title: "首页",
        component: Home,
      },
      {
        path: "/detail/:id",
        exact: true,
        title: "详情",
        component: Detail,
      },
    ],
  },
];

export default routes;
