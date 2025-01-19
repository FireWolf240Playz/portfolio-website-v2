"use client";
import Section from "@/app/_components/Section";
import ProjectDescription from "@/app/portfolio/_sectionComponents/ProjectDescription";
import Carousel from "@/app/_components/Carousel";
import TechStackItem from "@/app/_components/TechStackItem";

import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiReactquery,
  SiJsonwebtokens,
  SiExpress,
  SiStyledcomponents,
} from "react-icons/si";

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
      description: `A robust inventory management application designed to streamline the handling of devices, employees, furniture, software licenses, and user authentication. It also supports bar code/QR code scanning for quick asset check-in and check-out.`,
      githubLink: "https://github.com/FireWolf240Playz/inventory-managment",

      stack: [
        { label: "React", icon: <FaReact />, color: "text-blue-500" },
        { label: "MongoDB", icon: <FaDatabase />, color: "text-green-600" },
        {
          label: "Node.js",
          icon: <FaNodeJs />,
          color: "text-green-500",
        },
        {
          label: "Express.js",
          icon: <SiExpress />,
          color: "text-black",
        },
        {
          label: "Tanstack Query",
          icon: <SiReactquery />,
          color: "text-red-500",
        },
        {
          label: "JSON Web Token",
          icon: <SiJsonwebtokens />,
          color: "text-white",
        },
        {
          label: "Styled components",
          icon: <SiStyledcomponents />,
          color: "text-yellow-500",
        },
      ],

      functionalities: [
        "User authentication with secure login/logout (JWT)",
        "Role-based access control (admin, manager, user, etc.)",
        "CRUD operations for devices, employees, and furniture",
        "Track software licenses with renewal notifications",
        "Bar code/QR code scanning to assign and return assets quickly",
        "Avatar uploads for user profiles",
        "Responsive design for all devices",
      ],

      howToUse: [
        "Log in or register a new user account (if self-registration is enabled).",
        "Go to 'Devices' or 'Furniture' to create/update hardware or office items.",
        "Assign assets to employees—scan or enter bar/QR code if available.",
        "Manage 'Licenses' by adding keys, tracking expiration, and renewing them.",
        "Update personal profile, including avatar, in the 'Account' section.",
      ],

      deployment: [
        "Configure environment variables (PORT, MONGO_URI, JWT_SECRET, etc.).",
        "Deploy backend on a hosting platform (e.g., Render, Heroku, AWS).",
        "Build and deploy frontend on Netlify or Vercel. Link it to your API.",
        "Ensure environment variables match your production values.",
      ],
      installation: [
        "Clone repo: git clone https://github.com/FireWolf240Playz/inventory-managment.git",
        "Backend setup: cd src/backend => npm install => npm run dev",
        "Frontend setup: cd ../../frontend => npm install => npm run dev",
        "Create a .env file in backend with PORT=..., MONGO_URI=..., JWT_SECRET=... ",
        "Open http://localhost:5173 (if using Vite) to access the React app.",
      ],

      futureUpdates: [
        "Advanced search & filtering for devices, furniture, and employees.",
        "Integration with Slack or email for license renewal reminders.",
        "Two-factor authentication for increased security.",
        "Bulk assignment or check-in/out of multiple devices/furniture.",
        "PWA support for offline usage in warehouse or remote settings.",
      ],
      acknowledgement: `Thanks to the Node, React, and open-source communities for their
        awesome tools. Special thanks to contributors who tested features and
        provided feedback.`,

      images: [dashboard, devices, employees, licenses, account],
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
          noLiveDemo={true}
          position="left"
        />
        <div className="mt-6">
          <Carousel images={project.images} />
        </div>
      </Section>

      <Section oneCol={true}>
        <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
          Technology Stack
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.stack.map((tech, index) => (
            <TechStackItem key={index} item={tech} />
          ))}
        </ul>
      </Section>

      <Section oneCol={true}>
        <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
          Main Functionalities
        </h2>
        <ul className="list-disc pl-6">
          {project.functionalities.map((feature, index) => (
            <li key={index} className="text-lg">
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      {project.howToUse && project.howToUse.length > 0 && (
        <Section oneCol={true}>
          <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
            How To Use
          </h2>
          <ol className="list-decimal pl-6 space-y-2">
            {project.howToUse.map((step, i) => (
              <li key={i} className="text-lg">
                {step}
              </li>
            ))}
          </ol>
        </Section>
      )}

      {project.deployment && project.deployment.length > 0 && (
        <Section oneCol={true}>
          <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
            Deployment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.deployment.map((step, i) => (
              <li key={i} className="text-lg">
                {step}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.installation && project.installation.length > 0 && (
        <Section oneCol={true}>
          <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
            Installation
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.installation.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.futureUpdates && project.futureUpdates.length > 0 && (
        <Section oneCol={true}>
          <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
            Future Updates
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.futureUpdates.map((future, i) => (
              <li key={i} className="text-lg">
                {future}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {project.acknowledgement && (
        <Section oneCol={true}>
          <h2 className="text-2xl font-bold mb-4 text-accent-500 border-b-2 border-b-accent-400">
            Acknowledgement
          </h2>
          <p className="text-lg leading-relaxed">{project.acknowledgement}</p>
        </Section>
      )}
    </div>
  );
}
