export const Tooltip = ({ children, text }: any) => {
  return (
    <div className="group/tooltip relative">
      {children}
      <div className="pointer-events-none absolute left-[50%] top-[120%] z-10 w-max -translate-x-[50%] rounded bg-main-darker p-2 text-xs text-gray-300 opacity-0 ring-1 ring-accent/10 transition delay-0 group-hover/tooltip:opacity-100 group-hover/tooltip:delay-300">
        {text}
      </div>
    </div>
  );
};
