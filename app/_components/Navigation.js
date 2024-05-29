import Link from "next/link";
import Image from "next/image";

function Navigation() {
  return (
    <ul className="flex justify-around items-center gap-4  h-10 text-primary-100 bg-primary-800">
      <Link href="/">
        <Image
          src="/logo.jpg"
          width={40}
          height={40}
          className="rounded-md mr-auto"
          alt="logo"
        />
      </Link>
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
  );
}

export default Navigation;
