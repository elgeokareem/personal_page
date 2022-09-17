export default function Navbar() {
  return (
    <nav className="bg-[#1f1f1f] h-14 flex justify-between items-center px-5">
      <ul className="flex gap-4 cursor-pointer">
        <li>Home</li>
        <li>About me</li>
        <li>Algo mas</li>
        <li>Algo mas</li>
      </ul>

      <div>
        <button>Login</button>
      </div>
    </nav>
  );
}
