import Link from "next/link";

const textStyle = "hover:text-amber-400";

const Navbar = () => {
  return (
    <header class="flex flex-row w-full bg-[#343434] items-center justify-around">
      <nav class="p-4 text-white">
        <ul class="flex gap-14 text-2xl list-none m-0 p-0">
          <li class={textStyle}>
            <Link href="/">Last-News</Link>
          </li>
          {/*   <li>
            <Link href="#">Categories</Link>
          </li> */}
          <li class={textStyle}>
            <Link href="/categories/international">International-News</Link>
          </li>
          <li class={textStyle}>
            <Link href="/categories/sports">Sport-News</Link>
          </li>
          <li class={textStyle}>
            <Link href="/bookmarks2">Bookmarks</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
