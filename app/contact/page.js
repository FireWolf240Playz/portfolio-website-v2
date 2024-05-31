"use client";

import { useEffect, useState } from "react";
import Section from "../_components/Section";
import Form from "./Form";

function Page() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  console.log(width);
  return (
    <Section>
<<<<<<< HEAD
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
      <div className="w-full  ">
=======
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="inline-block text-4xl uppercase">
          If you like what you see...{" "}
        </h1>
        <p className="text-2xl">Let&apos;s get in touch 👉</p>
      </div>

      <div className="w-full ">
>>>>>>> aba3f62d37b89a437de42f51684b7417c3234858
        <Form />
      </div>
    </Section>
  );
}

export default Page;
