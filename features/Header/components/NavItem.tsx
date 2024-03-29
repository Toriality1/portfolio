import { nav_data } from "@/data/nav";
import Link from "next/link";

type NavItemProps = {
  item: (typeof nav_data)[number];
};

export const NavItem = ({ item }: NavItemProps) => {
  return (
    <li key={item.name}>
      <Link href={item.hash} className="flex items-center text-gray-700">
        {item.name}
      </Link>
    </li>
  );
};
