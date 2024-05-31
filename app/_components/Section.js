function Section({ children }) {
  return (
    <section className="grid grid-cols-2 gap-8 justify-items-center mb-10 max-800:grid-cols-1 ">
      {children}
    </section>
  );
}

export default Section;
