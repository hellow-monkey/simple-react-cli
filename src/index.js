import "@/extend";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "@/helper/router";
import routes from "@/config/router";
import "@/plugin/ajax";
import "@/static/style/app.scss";

ReactDOM.render(<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>, document.getElementById("root"));
