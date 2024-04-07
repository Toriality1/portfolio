"use client";

import { MdOutlineAlternateEmail, MdOutlineMessage } from "react-icons/md";
import { Submit } from "./Submit";
import { send } from "@/actions/send";

type FormProps = {
  alert_msg: string;
  email: string;
  message: string;
  send_msg: string;
  sending: string;
};

export const Form = ({
  alert_msg,
  email,
  message,
  send_msg,
  sending,
}: FormProps) => {
  return (
    <form
      className="m-auto flex max-w-[80ch] flex-col gap-4 text-accent"
      action={async (formData) => {
        await send(formData);
        alert(alert_msg);
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
  );
};
