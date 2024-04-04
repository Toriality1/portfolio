import { Section } from "@/components/Section";
import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";

export const Contact = () => {
  return (
    <Section color="bg-white" className="space-y-16">
      <Section.Header>Get In Touch</Section.Header>
      <form className="m-auto flex max-w-[80ch] flex-col gap-4 text-accent">
        <div className="group flex w-full items-center gap-4 rounded-sm p-4 ring-1 ring-accent/50 focus-within:ring-accent/100">
          <MdOutlineAlternateEmail className="text-xl opacity-50 group-focus-within:opacity-100" />
          <input
            type="email"
            placeholder="Enter your email"
            className="grow outline-none group-focus-within:text-black"
          />
        </div>
        <div className="group flex w-full items-start gap-4 rounded-sm p-4 ring-1 ring-accent/50 focus-within:ring-accent/100">
          <MdOutlineMessage className="mt-1 text-xl opacity-50 group-focus-within:opacity-100" />
          <textarea
            placeholder="Enter your message"
            className="grow resize-none outline-none group-focus-within:text-black"
            rows={10}
          ></textarea>
        </div>
        <button
          type="submit"
          className="group m-auto mb-10 w-fit border-2 border-accent/50 p-1 transition hover:border-accent-darker/50"
        >
          <p className="title bg-accent px-4 py-2 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-accent-darker group-hover:text-accent">
            Send message
          </p>
        </button>
      </form>
    </Section>
  );
};
