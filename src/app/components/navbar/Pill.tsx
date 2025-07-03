import React from "react";

interface Props {
  children: React.ReactNode;
}

const Pill = ({ children }: Props) => {
  return (
    <div className="flex items-center bg-white text-primaryText px-2.5 py-1 border border-border rounded-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-tangerine pr-1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        />
      </svg>

      {children}
    </div>
  );
};

export default Pill;
