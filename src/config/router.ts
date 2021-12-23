import { lazy, LazyExoticComponent } from "react";
// import Main from "@/layout/main";
// import Login from "@/page/login";
// import Home from "@/page/home";

export interface IRoute {
  path: string;
  exact?: boolean;
  strict?: boolean;
  title?: string;
  component?: LazyExoticComponent<() => JSX.Element>;
  render?: (...args: any[]) => JSX.Element;
  routes?: IRoute[];
}

const routes: IRoute[] = [
  {
    path: "/login",
    exact: true,
    title: "登录",
    component: lazy(() => import("@/page/login")),
  },
  {
    path: "/",
    component: lazy(() => import("@/layout/main")),
    routes: [
      {
        path: "/",
        exact: true,
        title: "首页",
        component: lazy(() => import("@/page/home")),
      },
    ],
  },
];

export default routes;
