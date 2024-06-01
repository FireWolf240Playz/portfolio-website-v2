import image1 from "@/public/project-1.png";
import image2 from "@/public/project-2.png";
import image3 from "@/public/project-3.png";
import image4 from "@/public/project-4.png";

import ProjectDescription from "./_sectionComponents/ProjectDescription";
import ProjectImage from "./_sectionComponents/ProjectImage";
import Section from "../_components/Section";

function Page() {
  return (
    <>
      <h1 className="text-4xl text-center mt-10 mb-10">
        Welcome to my portfolio page!
      </h1>
      <Section>
        <ProjectDescription
          title="The Wild Oasis"
          description={` An internal tool designed for employees to efficiently manage
              bookings and stays at the hotel.
              Streamlines the reservation process, ensuring seamless 
              customer experiences and optimized workflow for the staff.`}
          githubLink="https://github.com/FireWolf240Playz/the-wild-oasis"
          demoLink="https://the-wild-oasis-by-alexander-yordanov.netlify.app/"
        />

        <ProjectImage image={image1} />
      </Section>

      <Section>
        <ProjectImage image={image2} />
        <ProjectDescription
          demoLink="https://the-wild-oasis-website-five.vercel.app/"
          githubLink="https://github.com/FireWolf240Playz/the-wild-oasis-website"
          title="The Wild Oasis Website"
          description={`A user-friendly platform for booking our luxury cabins. Visitors can easily make new reservations, edit or delete existing bookings, and view their booking history. Experience seamless management and exceptional customer service with our all-in-one booking solution.`}
          position="right"
        />
      </Section>

      <Section>
        <ProjectDescription
          demoLink="https://pizza-delivery-app-puce.vercel.app/"
          githubLink="https://github.com/FireWolf240Playz/pizza-delivery-app"
          title="Fast React Pizza"
          description="A simple, yet effective pizza delivery app where users can choose from a vast variety of pizzas. Enjoy a seamless ordering experience with quick navigation, easy customization, and fast delivery, all designed to satisfy your pizza cravings."
        />
        <ProjectImage image={image3} />
      </Section>
      <Section>
        <ProjectImage image={image4} />

        <ProjectDescription
          githubLink="/"
          demoLink="/"
          title="World Wise"
          description="An intuitive app that allows users to bookmark their most recent trips with a simple click on the map. It also provides general information about each country, making it easy to track your travels and learn more about your destinations."
          position="right"
        />
      </Section>
    </>
  );
}

export default Page;
