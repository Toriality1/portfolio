"use client";

import { useFormStatus } from "react-dom";

export const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="group m-auto mb-10 w-fit border-2 border-accent/50 p-1 transition hover:border-accent-darker/50 disabled:pointer-events-none disabled:opacity-70"
    >
      <p className="title bg-accent px-4 py-2 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-accent-darker group-hover:text-accent">
        {pending ? "Sending it..." : "Send message"}
      </p>
    </button>
  );
};
