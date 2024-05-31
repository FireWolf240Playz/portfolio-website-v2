import { SiNextdotjs, SiGit, SiTailwindcss, SiReact } from "react-icons/si";
import TechStackItem from "./TechStackItem";

const techStackList = [
  {
    label: "React.js",
    icon: <SiReact className="group-hover:fill-current" />,
    color: "group-hover:text-blue-500",
  },
  {
    label: "Next.js",
    icon: <SiNextdotjs className="group-hover:fill-current" />,
    color: "group-hover:text-black",
  },
  {
    label: "Git",
    icon: <SiGit className="group-hover:fill-current" />,
    color: "group-hover:text-red-500",
  },
  {
    label: "TailwindCSS",
    icon: <SiTailwindcss className="group-hover:fill-current" />,
    color: "group-hover:text-teal-500",
  },
];

function TechStack() {
  return (
    <div>
      <ul className="flex gap-10 mb-10 max-600:flex-col   max-600:items-center">
        {techStackList.map((item) => (
          <TechStackItem item={item} key={item.label} />
        ))}
      </ul>
    </div>
  );
}

export default TechStack;
