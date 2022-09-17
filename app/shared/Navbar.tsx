export default function Navbar() {
  return (
    <nav className="bg-[#1f1f1f] h-14 flex justify-between items-center px-5">
      <ul className="flex gap-4 cursor-pointer">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>

      <div>
        <button>Kek</button>
      </div>
    </nav>
  );
}
