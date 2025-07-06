"use client";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Reorder } from "framer-motion";
import { useState } from "react";
import Pill from "./Pill/Pill";
import { defaultPillClasses } from "./Pill/utils";
import { PageTypes } from "./types";

const initialPages = [
  {
    id: 1,
    type: PageTypes.Info,
    isActive: true,
    text: "Info",
  },
  {
    id: 2,
    type: PageTypes.Document,
    isActive: false,
    text: "Details",
  },
  {
    id: 3,
    type: PageTypes.Document,
    isActive: false,
    text: "Other",
  },
  {
    id: 4,
    type: PageTypes.Ending,
    isActive: false,
    text: "Ending",
  },
];

const Navbar = () => {
  const [pages, setPages] = useState(initialPages);

  const handlePageChange = (pageId: number) => {
    const updatedPages = pages.map((page) => ({ ...page, isActive: pageId === page.id }));
    setPages(updatedPages);
  };

  return (
    <div className="flex w-full h-20 p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0 space-x-2">
      <Reorder.Group
        as="div"
        className="flex space-x-2"
        axis="x"
        onReorder={setPages}
        values={pages}>
        {pages.map((page) => (
          <Pill key={page.id} page={page} onClick={handlePageChange} />
        ))}
      </Reorder.Group>
      <button
        className={`${defaultPillClasses} bg-white hover:bg-white/35 text-primaryText shadow-mini`}
        onClick={() => {}}>
        <PlusIcon className="size-5 mr-1.5" />
        Add page
      </button>
    </div>
  );
};

export default Navbar;
