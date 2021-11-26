import { renderRoutes } from "@/helper/router";

export default function Main({ route }) {
  return <div className="layout-main">{renderRoutes(route.routes)}</div>;
}
