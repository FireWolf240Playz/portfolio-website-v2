function TechStackItem({ item }) {
  return (
    <li
      className="group flex items-center gap-3"
      aria-label={`Technology: ${item.label}`}
    >
      <div
        className={`text-4xl transition-all duration-300 ${item.color}`}
        aria-hidden="true"
      >
        {item.icon}
      </div>
      <span className="ml-2 text-primary-100">{item.label}</span>
    </li>
  );
}
export default TechStackItem;
