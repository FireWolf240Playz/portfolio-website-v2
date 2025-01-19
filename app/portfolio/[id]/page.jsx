"use client";
import Section from "@/app/_components/Section";
import ProjectDescription from "@/app/portfolio/_sectionComponents/ProjectDescription";
import Carousel from "@/app/_components/Carousel";
import TechStackItem from "@/app/_components/TechStackItem";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";

import dashboard from "@/public/invetory-managment-photos/dashboard.png";
import devices from "@/public/invetory-managment-photos/devices.png";
import employees from "@/public/invetory-managment-photos/employees.png";
import licenses from "@/public/invetory-managment-photos/licenses.png";
import account from "@/public/invetory-managment-photos/account.png";

export default function ProjectPage({ params }) {
  const { id } = params;

  const projectData = {
    "inventory-management": {
      title: "Inventory Management System",
      description: `A robust inventory management application designed to streamline the handling of devices, employees, software licenses, and user authentication.`,
      stack: [
        { label: "React", icon: <FaReact />, color: "text-blue-500" },
        { label: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { label: "MongoDB", icon: <FaDatabase />, color: "text-green-600" },
      ],
      functionalities: [
        "User authentication with secure login/logout (JWT)",
        "Role-based access control",
        "CRUD operations for devices and employees",
        "Track software licenses with renewal notifications",
        "Avatar uploads for user profiles",
        "Responsive design for all devices",
      ],
      images: [dashboard, devices, employees, licenses, account],
      githubLink: "https://github.com/FireWolf240Playz/inventory-managment",
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p>The project you are looking for does not exist.</p>
        <a
          href="/portfolio"
          className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
        >
          Go Back to Portfolio
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <Section>
        <ProjectDescription
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
        />
        <div className="mt-6">
          <Carousel images={project.images} />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.stack.map((tech, index) => (
            <TechStackItem key={index} item={tech} />
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-4">Main Functionalities</h2>
        <ul className="list-disc pl-6">
          {project.functionalities.map((feature, index) => (
            <li key={index} className="text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
