import Section from "@/app/_components/Section";
import ProjectDescription from "@/app/portfolio/_sectionComponents/ProjectDescription";
import ProjectImage from "@/app/portfolio/_sectionComponents/ProjectImage";
import image1 from "@/public/project-1.png";

function FullStackProjects() {
  return (
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
  );
}

export default FullStackProjects;
