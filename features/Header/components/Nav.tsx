import { nav_data } from "@/data/nav";
import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        {nav_data.map((item) => (
          <NavItem key={item.hash} item={item} />
        ))}
      </ul>
    </nav>
  );
};
