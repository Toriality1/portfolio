"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (formData: FormData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || !message) {
    return { error: "Email and message are required" };
  }

  if (typeof email !== "string" || typeof message !== "string") {
    return { error: "Email and message must be a string" };
  }

  try {
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pcrelier@hotmail.com",
      subject: "Message from portfolio",
      reply_to: email,
      text: message,
    });
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    } else if (error && typeof error === "object" && "message" in error) {
      return { error: error.message };
    } else if (error && typeof error === "string") {
      return { error };
    }

    return { error: "Unknown error" };
  }
};
