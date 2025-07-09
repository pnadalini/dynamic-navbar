"use client";
import { useRef, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Reorder } from "framer-motion";
import Pill from "./Pill/Pill";
import { defaultPillClasses } from "./Pill/utils";
import { getNextPage, initialActivePage, initialPages } from "./utils";

const Navbar = () => {
  const [pages, setPages] = useState(initialPages);
  const [activePageId, setActivePageId] = useState(initialActivePage);
  const ref = useRef(null);

  const addPage = () => {
    const nextItem = getNextPage(pages);

    if (nextItem) {
      setActivePageId(nextItem.id);
      setPages([...pages, nextItem]);
    }
  };

  return (
    <div
      ref={ref}
      className="flex w-full h-20 p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0 space-x-2 overflow-y-hidden">
      <Reorder.Group
        as="div"
        className="flex space-x-2"
        axis="x"
        onReorder={setPages}
        values={pages}>
        {pages.map((page) => (
          <Pill
            key={page.id}
            isActive={activePageId === page.id}
            page={page}
            onClick={setActivePageId}
          />
        ))}
      </Reorder.Group>
      <button
        className={`${defaultPillClasses} bg-white hover:bg-white/35 text-primaryText shadow-mini min-w-28`}
        onClick={addPage}>
        <PlusIcon className="size-5 mr-1.5" />
        Add page
      </button>
    </div>
  );
};

export default Navbar;
