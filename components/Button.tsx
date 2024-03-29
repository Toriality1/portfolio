import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ href, children, className }: ButtonProps) => {
  return (
    <Link
      className={twMerge(
        "font-bold ring-2 ring-slate-500 rounded-full py-2.5 px-5 text-slate-500 hover:ring-emerald-500",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
