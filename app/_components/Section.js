function Section({ children }) {
  return (
    <section className="grid grid-cols-2 gap-8 justify-items-center mb-10">
      {children}
    </section>
  );
}

export default Section;
