import { Bio } from "./Bio";
import { Skills } from "./Skills";

export const Info = () => {
  return (
    <div className="flex items-stretch gap-12">
      <Bio />
      <Skills />
    </div>
  );
};
