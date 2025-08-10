import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { createElement } from "react";
import { FiExternalLink } from "react-icons/fi";
import Markdown from "react-markdown";

async function getFeaturedPost() {
  try {
    const post = await fetch(process.env.BLOG_URL! + "/api/featured", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!post.ok) {
      return null;
    }

    return await post.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default async function Blog() {
  const t = useTranslations("Blog");

  const headingComponents = Object.fromEntries(
    Array.from({ length: 6 }, (_, i) => {
      const tag = `h${i + 1}`;
      return [
        tag,
        ({ node, ...props }: { node: any; [key: string]: any }) =>
          createElement(tag, { className: "title uppercase", ...props }),
      ];
    }),
  );

  const post = await getFeaturedPost();

  if (!post) {
    return null;
  }

  return (
    <Section id="Blog" color="bg-black" className="space-y-16 text-white">
      <SectionHeader>Blog</SectionHeader>
      <div className="mx-auto w-fit">
        <h4 className="title text-2xl uppercase opacity-50">{t("featured")}</h4>
        <div className="relative h-[80vh] overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 flex h-1/2 w-full justify-end bg-gradient-to-t from-black from-10% to-transparent">
            <Link
              target="_blank"
              href={process.env.BLOG_URL! + "/posts/" + post.slug}
              className="group pointer-events-auto m-auto mb-10 w-fit translate-y-10 border-2 border-neutral-600/50 p-1 transition hover:border-neutral-800/50 disabled:pointer-events-none disabled:opacity-70"
            >
              <p className="title flex items-center gap-2 bg-neutral-600 px-4 py-2 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-neutral-800">
                <span className="-translate-y-0.5">
                  <FiExternalLink />
                </span>
                <span>{t("read")}</span>
              </p>
            </Link>
          </div>
          <article className="prose prose-invert">
            <Markdown components={headingComponents}>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </Section>
  );
}
