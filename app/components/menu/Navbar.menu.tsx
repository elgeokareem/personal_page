import { Link } from "@remix-run/react";

export function Navbar() {
  return (
    <nav>
      <ul className="flex justify-between px-6 py-3 list-none bg-blue-500">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-x-6">
          <Link to="/blog">Blog</Link>
          <Link to="/">About Me</Link>
          <Link to="/auth/login">Login</Link>
        </div>
      </ul>
    </nav>
  );
}
