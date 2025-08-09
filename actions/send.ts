"use server";

export async function send(formData: FormData) {
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!email || !message) {
    return { error: "Email and message are required" };
  }

  if (typeof email !== "string" || typeof message !== "string") {
    return { error: "Email and message must be a string" };
  }

  const FORM_ENDPOINT = process.env.FORMSPREE_ENDPOINT;

  const response = await fetch(FORM_ENDPOINT!, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    console.error("Failed to send message: ", await response.text());
    return { error: "Failed to send message" };
  }
}
