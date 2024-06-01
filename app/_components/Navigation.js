import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex justify-around items-center h-10 text-primary-100 bg-primary-900 max-800:mb-5 ">
      <Link href="/" className="mr-auto">
        <h3 className="font-bold text-[1.15rem]">Alex.dev</h3>
      </Link>
      <ul>
        <Link
          href="/about"
          className="hover:bg-accent-500 hover:rounded-md  px-2.5 py-1 ease-in duration-300 w-15 px-15 py-15  "
        >
          About
        </Link>
        <Link
          href="/portfolio"
          className="hover:bg-accent-500 hover:rounded-md  px-2.5 py-1 ease-in duration-300 w-15 px-15 py-15  "
        >
          Portfolio
        </Link>
        <Link
          href="/contact"
          className="hover:bg-accent-500 hover:rounded-md  px-2.5 py-1 ease-in duration-300 w-15 px-15 py-15  "
        >
          Contact me
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
