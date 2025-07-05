"use client";
import React, { useState } from "react";
import Pill from "./Pill/Pill";
import { PageTypes } from "./types";
import { PlusIcon } from "@heroicons/react/24/outline";
import { defaultPillClasses } from "./Pill/utils";

const initialPages = [
  {
    id: 1,
    type: PageTypes.Info,
    isActive: true,
    children: "Info",
  },
  {
    id: 2,
    type: PageTypes.Document,
    isActive: false,
    children: "Details",
  },
  {
    id: 3,
    type: PageTypes.Document,
    isActive: false,
    children: "Other",
  },
  {
    id: 4,
    type: PageTypes.Ending,
    isActive: false,
    children: "Ending",
  },
];

const Navbar = () => {
  const [pages, setPages] = useState(initialPages);

  const handlePageChange = (pageId: number) => {
    const updatedPages = initialPages.map((page) => ({ ...page, isActive: pageId === page.id }));
    setPages(updatedPages);
  };

  return (
    <div className="flex w-full h-20 p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0 space-x-2">
      {pages.map((page) => {
        const { id } = page;

        return <Pill key={id} {...page} onClick={handlePageChange} />;
      })}
      <button
        className={`${defaultPillClasses} bg-white hover:bg-white/35 text-primaryText cursor-pointer shadow-mini`}
        onClick={() => {}}>
        <PlusIcon className="size-5 mr-1.5" />
        Add page
      </button>
    </div>
  );
};

export default Navbar;
