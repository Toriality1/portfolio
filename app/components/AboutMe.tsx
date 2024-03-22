const technologies_data = [
  "React",
  "NextJS",
  "Tailwind",
  "Typescript",
  "NodeJS",
] as const;

export const AboutMe = () => {
  return (
    <section className="h-screen" id="about-me">
      <h2 className="text-center text-4xl font-bold mb-10">About Me</h2>
      {/* TODO */}
      <p className="w-[60ch] leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quaerat omnis quia
        fugit, fuga aperiam corporis modi sunt optio dolores earum vitae! Quasi deleniti
        ducimus, minus inventore ad quam aliquam.
      </p>
      <div className="mt-10">
        <p className="text-sm">The technologies I use:</p>
        <ul className="mt-3 grid grid-cols-3">
          {technologies_data.map((item) => (
            <li key={item}>
              <p className="flex items-center space-x-2">
                <span className="text-4xl leading-none text-emerald-400">•</span>
                <span>{item}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
