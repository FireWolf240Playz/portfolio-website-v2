"use client";

import Section from "../_components/Section";
import Form from "./Form";

function Page() {
  return (
    <Section>
      <div className="flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="inline-block text-4xl uppercase">
          If you like what you see...{" "}
        </h1>
        <p className="text-2xl">Let&apos;s get in touch 👉</p>
      </div>

      <div className="w-full ">
        <Form />
      </div>
    </Section>
  );
}

export default Page;
