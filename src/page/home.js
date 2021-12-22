import { Link } from "react-router-dom";
import Logo from "@/static/image/logo.png";

export default function Home() {
  return (
    <div className="d-flex justify-between align-items-center">
      <img src={Logo} alt="Logo" />
      <span className="pad-1">Home</span>
      <Link to="/login">去登录</Link>
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}
