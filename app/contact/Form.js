"use client";

import Button from "../_components/Button";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xrgnvnjn");

  if (state.submitting) return <p>Submitting...</p>;

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      className="flex flex-col gap-5 justify-center h-screen"
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xrgnvnjn"
      method="POST"
    >
      <div className="flex flex-col justify-center gap-4 w-8/12">
        <label htmlFor="name">What is your name?</label>
        <input
          id="name"
          type="text"
          name="name"
          className="text-accent-600 border p-2 rounded-md"
          placeholder="e.g John Doe"
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col justify-center gap-4 w-8/12">
        <label htmlFor="email">Your Email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="text-accent-600 border p-2 rounded-md"
          placeholder="e.g me@example.com"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col justify-center gap-4 w-8/12">
        <label htmlFor="inquiry">Please write your message here 👇</label>
        <textarea
          id="inquiry"
          name="message"
          className="rounded-md text-accent-600 p-2"
          placeholder="Your message"
          required
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <Button type="submit" extension="w-8/12 flex justify-center rounded-md">
        Submit
      </Button>
    </form>
  );
}

export default Form;
