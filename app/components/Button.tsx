import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export const Button = ({ href, children }: ButtonProps) => {
  return (
    <Link
      className="font-bold ring-2 ring-slate-500 rounded-full py-2.5 px-5 text-slate-500 hover:ring-emerald-500"
      href={href}
    >
      {children}
    </Link>
  );
};
