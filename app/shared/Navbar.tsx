import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav className="bg-[#1f1f1f] h-14 flex justify-between items-center px-5">
      <ul className="flex gap-4 cursor-pointer">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <li>Algo mas</li>
        <li>Algo mas</li>
      </ul>

      <div>
        <button>Theme</button>
        <button>Login</button>
      </div>
    </nav>
  );
}
