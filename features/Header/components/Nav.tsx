import { nav_data } from "@/data/nav";
import { NavItem } from "./NavItem";
import { useState } from "react";
import { useActiveSection } from "../context/ActiveSection";

export const Nav = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <nav>
      <ul className="flex gap-8">
        {nav_data.map((item) => (
          <NavItem
            key={item.hash}
            item={item}
            active={activeSection}
            setActive={setActiveSection}
            setTimeOfLastClick={setTimeOfLastClick}
          />
        ))}
      </ul>
    </nav>
  );
};
