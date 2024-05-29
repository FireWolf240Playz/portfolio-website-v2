import classNames from "classnames";
import Link from "next/link";

function Button({
  children,
  to = "",
  className = "py-3 px-5 bg-accent-500 inline-block min-width: fit-content hover:bg-accent-600 transition-all duration-500 text-primary-100",
  extension = "",
  newTab = false,
}) {
  return (
    <button>
      <Link
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : ""}
        className={classNames(className, extension)}
        href={to}
      >
        {children}
      </Link>
    </button>
  );
}

export default Button;
