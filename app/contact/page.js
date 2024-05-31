"use client";

import { useEffect, useState } from "react";
import Section from "../_components/Section";
import Form from "./Form";

function Page() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <Section>
      <>
        <div className="flex flex-col gap-5 justify-center items-center h-screen ">
          <h1 className="inline-block text-4xl uppercase max-800:text-center ">
            If you like what you see...
          </h1>
          <p className="text-2xl">
            Let&apos;s get in touch {width < 800 ? " 👇" : "👉"}{" "}
          </p>
        </div>
      </>
      <div className="w-full flex items-center justify-center ">
        <Form />
      </div>
    </Section>
  );
}

export default Page;
