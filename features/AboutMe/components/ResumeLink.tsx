import { FaFilePdf } from "react-icons/fa";
import Link from "next/link";

export const ResumeLink = () => {
  return (
    <Link
      href={"#"}
      className="group w-fit border-2 border-button-main/25 p-1 transition hover:border-white/25"
    >
      <p className="title flex items-center gap-2 bg-button-main px-4 py-2 text-lg font-bold uppercase tracking-wide text-white transition group-hover:bg-white group-hover:text-button-main">
        <FaFilePdf className="mb-0.5" />
        View Resume
      </p>
    </Link>
  );
};
