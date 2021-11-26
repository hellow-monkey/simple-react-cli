import { renderRoutes } from "@/helper/router";

export default function Main({ route }) {
  return (
    <div className="layout-main">
      {renderRoutes(route.routes)}
      <div className="text-center">实例演示</div>
    </div>
  );
}
