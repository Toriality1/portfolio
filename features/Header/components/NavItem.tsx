import { nav_data } from "@/data/nav";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { SectionName } from "../context/ActiveSection";

type NavItemProps = {
  item: (typeof nav_data)[number];
  active: string;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const NavItem = ({
  item,
  active,
  setActive,
  setTimeOfLastClick,
}: NavItemProps) => {
  return (
    <li key={item.name}>
      <Link
        href={"#" + item.name}
        className={twMerge(
          "text-button-link flex items-center hover:text-white",
          item.name === active && "text-white underline underline-offset-8",
          item.name === active && active === "Contact" && "text-accent",
          active === "Contact" && "hover:text-accent-darker",
        )}
        onClick={() => {
          setActive(item.name);
          setTimeOfLastClick(Date.now());
        }}
      >
        {item.name}
      </Link>
    </li>
  );
};
