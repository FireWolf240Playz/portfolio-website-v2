import { Children } from "react";

function Section({ children, oneCol }) {
  const childrenCount = Children.count(children);

  const gridCols = oneCol === true ? "grid-cols-1" : "grid-cols-2";

  return (
    <section
      className={`grid ${gridCols} gap-8 justify-items-center mb-10 max-800:grid-cols-1`}
    >
      {children}
    </section>
  );
}

export default Section;
