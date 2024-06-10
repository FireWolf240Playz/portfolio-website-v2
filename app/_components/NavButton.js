import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function NavButton({ onClick, navBarOpen }) {
  return (
    <button
      onClick={onClick}
      className="z-20 absolute top-4 right-4 text-primary-100 "
    >
      {navBarOpen ? (
        <IoMdClose className="w-6 h-6" />
      ) : (
        <RxHamburgerMenu className="w-6 h-6" />
      )}
    </button>
  );
}

export default NavButton;
