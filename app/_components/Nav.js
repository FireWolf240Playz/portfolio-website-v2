"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

const className =
  "hover:bg-accent-500 hover:rounded-md ease-in duration-300 w-15 px-2.5 py-1";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Contact me",
    href: "/contact",
  },
];

function Nav() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const toggleNavBar = () => setNavbarOpen((navBar) => !navBar);

  return (
    <>
      <nav className="flex justify-between items-center h-16 text-primary-100 bg-primary-900 max-800:mb-5 w-full px-4 relative z-10">
        <Link href="/" className="mr-auto">
          <h3 className="font-bold text-[1.15rem]">Alex.dev</h3>
        </Link>

        <ul className="flex max-600:hidden">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className={className}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="max-600:flex hidden items-center px-3 py-2 font-bold">
          <button onClick={toggleNavBar}>
            {navBarOpen ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <RxHamburgerMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {navBarOpen && (
          <MenuOverlay
            links={links}
            className={className}
            navBarOpen={navBarOpen}
            toggleNavBar={toggleNavBar}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
