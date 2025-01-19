import Section from "@/app/_components/Section";
import ProjectImage from "@/app/portfolio/_sectionComponents/ProjectImage";
import ProjectDescription from "@/app/portfolio/_sectionComponents/ProjectDescription";
import image2 from "@/public/project-2.png";
import image3 from "@/public/project-3.png";
import image4 from "@/public/project-4.png";
import image5 from "@/public/project-5.png";

function FrontendProjects() {
  return (
    <>
      <Section>
        <ProjectDescription
          demoLink="https://the-wild-oasis-website-five.vercel.app/"
          githubLink="https://github.com/FireWolf240Playz/the-wild-oasis-website"
          title="The Wild Oasis Website"
          description={`A user-friendly platform for booking our luxury cabins. Visitors can easily make new reservations, edit or delete existing bookings, and view their booking history. Experience seamless management and exceptional customer service with our all-in-one booking solution.`}
          position="right"
        />
        <ProjectImage image={image2} />
      </Section>

      <Section>
        <ProjectImage image={image3} />
        <ProjectDescription
          demoLink="https://pizza-delivery-app-puce.vercel.app/"
          githubLink="https://github.com/FireWolf240Playz/pizza-delivery-app"
          title="Fast React Pizza"
          description="A simple, yet effective pizza delivery app where users can choose from a vast variety of pizzas. Enjoy a seamless ordering experience with quick navigation, easy customization, and fast delivery, all designed to satisfy your pizza cravings."
        />
      </Section>
      <Section>
        <ProjectDescription
          githubLink="https://github.com/FireWolf240Playz/worldwise"
          demoLink="https://worldwise-five-kappa.vercel.app/"
          title="World Wise"
          description="An intuitive app that allows users to bookmark their most recent trips with a simple click on the map. It also provides general information about each country, making it easy to track your travels and learn more about your destinations."
          position="right"
        />
        <ProjectImage image={image4} />
      </Section>
      <Section>
        <ProjectImage image={image5} />
        <ProjectDescription
          demoLink="https://forkify-app-lac.vercel.app/"
          title="Forkify app"
          githubLink="https://github.com/FireWolf240Playz/forkify-app"
          description="A versatile app for food lovers to browse recipes, add their own creations, and bookmark favorites. Cooking and organizing recipes has never been easier!"
        />
      </Section>
    </>
  );
}

export default FrontendProjects;
