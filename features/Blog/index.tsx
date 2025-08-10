import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { createElement } from "react";
import Markdown from "react-markdown";

const mockedData = `
# Test Title

Hello world
`;

export default function Blog() {
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

  return (
    <Section id="Blog" color="bg-black" className="space-y-16 text-white">
      <SectionHeader>Blog</SectionHeader>
      <div>
        <h4 className="title text-2xl uppercase opacity-50">
          Featured blog post:
        </h4>
        <article className="prose prose-invert">
          <Markdown components={headingComponents}>{mockedData}</Markdown>
        </article>
      </div>
    </Section>
  );
}
