import Link from "next/link";

const textStyle = "hover:text-amber-400"; //Tailwind style

//TODO:FIX CATEGORIES , SUB-MENU
const Navbar = () => {
  return (
    <div className="flex flex-row w-full bg-[#343434] items-center justify-around">
      <nav className="p-4 text-white">
        <ul className="flex gap-14 text-2xl list-none m-0 p-0">
          <li className={textStyle}>
            <Link href="/">Last-News</Link>
          </li>
          {/*   <li>
            <Link href="#">Categories</Link>
          </li> */}
          <li className={textStyle}>
            <Link href="/categories/international">International-News</Link>
          </li>
          <li className={textStyle}>
            <Link href="/categories/sports">Sport-News</Link>
          </li>
          <li className={textStyle}>
            <Link href="/bookmarks2">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
