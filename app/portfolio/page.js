"use client";

import { useState } from "react";
import FrontendProjects from "@/app/portfolio/_sectionComponents/FrontendProjects";
import FullStackProjects from "@/app/portfolio/_sectionComponents/FullStackProjects";
import Button from "@/app/_components/Button";

function Page() {
  const [view, setView] = useState("all");

  return (
    <>
      <h1 className="text-4xl text-center mt-10 mb-10">
        Welcome to my portfolio page!
      </h1>
      <div className="text-center mb-10">
        <Button
          onClick={() => setView("all")}
          className="px-4 py-2 mx-2 rounded text-white bg-primary-500 hover:bg-primary-600 transition-all duration-700"
        >
          Show All Projects
        </Button>
        <Button
          onClick={() => setView("frontend")}
          className="px-4 py-2 mx-2 rounded text-primary-800 bg-accent-400 hover:bg-accent-500 transition-all duration-700"
        >
          Show Frontend Projects
        </Button>
        <Button
          onClick={() => setView("fullstack")}
          className="px-4 py-2 mx-2 rounded text-white bg-background-500 hover:bg-accent-700 transition-all duration-700"
        >
          Show Full Stack Projects
        </Button>
      </div>

      <div>
        {view === "all" && (
          <>
            <FullStackProjects />
            <FrontendProjects />
          </>
        )}
        {view === "frontend" && <FrontendProjects />}
        {view === "fullstack" && <FullStackProjects />}
      </div>
    </>
  );
}

export default Page;
