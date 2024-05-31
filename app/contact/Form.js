"use client";

import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.submitting) return <p>Submitting...</p>;

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      className="flex flex-col gap-5 justify-center items-center h-1/6"
      onSubmit={handleSubmit}
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
      <button
        type="submit"
        className="w-8/12 flex justify-center rounded-md py-3 px-5 bg-accent-500  min-width: fit-content hover:bg-accent-600 transition-all duration-500 text-primary-100"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
