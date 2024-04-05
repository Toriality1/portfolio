"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { send } from "@/actions/send";
import { Submit } from "./components/Submit";

export const Contact = () => {
  return (
    <Section color="bg-white" className="space-y-16" id="Contact">
      <SectionHeader>Get In Touch</SectionHeader>
      <form
        className="m-auto flex max-w-[80ch] flex-col gap-4 text-accent"
        action={async (formData) => {
          await send(formData);
          alert("Thanks for sending your message!");
        }}
      >
        <div className="group flex w-full items-center gap-4 rounded-sm p-4 ring-1 ring-accent/50 focus-within:ring-accent/100">
          <MdOutlineAlternateEmail className="text-xl opacity-50 group-focus-within:opacity-100" />
          <input
            required
            maxLength={255}
            name="email"
            type="email"
            placeholder="Enter your email"
            className="grow outline-none group-focus-within:text-black"
          />
        </div>
        <div className="group flex w-full items-start gap-4 rounded-sm p-4 ring-1 ring-accent/50 focus-within:ring-accent/100">
          <MdOutlineMessage className="mt-1 text-xl opacity-50 group-focus-within:opacity-100" />
          <textarea
            name="message"
            required
            maxLength={1000}
            placeholder="Enter your message"
            className="grow resize-none outline-none group-focus-within:text-black"
            rows={10}
          ></textarea>
        </div>
        <Submit />
      </form>
    </Section>
  );
};
