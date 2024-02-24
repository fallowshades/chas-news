import Link from "next/link";

const textStyle = "hover:text-amber-400"; //Tailwind style

//TODO:FIX CATEGORIES , SUB-MENU
const Navbar = () => {
  return (
    <div class="flex flex-row w-full bg-[#343434] items-center justify-around">
      <nav class="p-4 text-white">
        <ul class="flex gap-14 text-xl list-none m-0 p-0">
          <li class={textStyle}>
            <Link href="/">Latest-News</Link>
          </li>
          <li>
            <Link href="#">Categories</Link>
            <ul className="drop-down">
              <li class={textStyle}>
                <Link href="/categories/international">International-News</Link>
              </li>
              <li class={textStyle}>
                <Link href="/categories/sports">Sport-News</Link>
              </li>
              <li class={textStyle}>
                <Link href="/categories/gameNews">Gaming-News</Link>
              </li>
            </ul>
          </li>
          <li class={textStyle}>
            <Link href="/bookmarks2">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
