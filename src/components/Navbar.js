import Link from "next/link";
const Navbar = () => {
  return (
    <header className="flex flex-row w-full bg-[#343434] items-center ">
      <nav className="p-4">
        <ul className="flex gap-2 text-2xl list-none m-0 p-0">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            {/* This will be changed to a Dropdown  */}
            <Link href="#">Categories</Link>
          </li>
          <li>
            <Link href="#">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
