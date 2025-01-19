import FrontendProjects from "@/app/portfolio/_sectionComponents/FrontendProjects";
import FullStackProjects from "@/app/portfolio/_sectionComponents/FullStackProjects";

function Page() {
  return (
    <>
      <h1 className="text-4xl text-center mt-10 mb-10">
        Welcome to my portfolio page!
      </h1>
      <div>
        <h1 className="text-3xl text-center mt-10 mb-10">Something</h1>
      </div>
      <FullStackProjects />
      <FrontendProjects />
    </>
  );
}

export default Page;
