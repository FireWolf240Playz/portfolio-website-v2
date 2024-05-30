"use client";

import { useForm } from "@formspree/react";
import FormElement from "@/app/contact/FormElement";
import { redirect } from "next/navigation";

function Form() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  if (state.submitting) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-4xl uppercase">Submitting...</p>
      </div>
    );
  }

  if (state.succeeded) {
    redirect("/thankyou");
  }

  return <FormElement state={state} handleSubmit={handleSubmit} />;
}

export default Form;
