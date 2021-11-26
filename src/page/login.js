import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="d-flex justify-between">
      <span>Login</span>
      <Link to="/">去首页</Link>
    </div>
  );
}
