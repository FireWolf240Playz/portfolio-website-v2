import Section from "@/app/_components/Section";
import ProjectDescription from "@/app/portfolio/_sectionComponents/ProjectDescription";
import ProjectImage from "@/app/portfolio/_sectionComponents/ProjectImage";
import image1 from "@/public/project-1.png";
import dashboard from "@/public/invetory-managment-photos/dashboard.png";
import Link from "next/link";

function FullStackProjects() {
  return (
    <>
      <Section>
        <ProjectDescription
          title="The Wild Oasis"
          description={` An internal tool designed for employees to efficiently manage
              bookings and stays at the hotel.
              Streamlines the reservation process, ensuring seamless 
              customer experiences and optimized workflow for the staff.`}
          githubLink="https://github.com/FireWolf240Playz/the-wild-oasis"
          demoLink="https://the-wid-oasis-by-alexander-yordanov-3.netlify.app/"
        />

        <ProjectImage image={image1} />
      </Section>
      <Section>
        <ProjectImage image={dashboard} />
        <ProjectDescription
          title="Inventory management system"
          description="A robust inventory management application designed to streamline the handling of devices, employees, software licenses, and user authentication. Features include secure login, role-based access, CRUD operations for devices and employees, license tracking, avatar uploads, and a responsive React-based frontend. Built with Node.js, Express, MongoDB, and JWT for seamless and secure management workflows"
          demoLink=""
          githubLink="https://github.com/FireWolf240Playz/inventory-managment"
          optionalText={
            <Link href="/portfolio/inventory-management">See details page</Link>
          }
        />
      </Section>
    </>
  );
}

export default FullStackProjects;
