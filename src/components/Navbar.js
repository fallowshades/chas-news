import Link from "next/link";
const Navbar = () => {
  return (
    <header className="flex flex-row w-full bg-[#343434] items-center justify-around">
      <nav className="p-4 text-white">
        <ul className="flex gap-2 text-2xl list-none m-0 p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          {/*   <li>
            <Link href="#">Categories</Link>
          </li> */}
          <li>
            <Link href="/categories/international">International News</Link>
          </li>
          <li>
            <Link href="/categories/sports">Sport News</Link>
          </li>
          <li>
            <Link href="/bookmarks2">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
