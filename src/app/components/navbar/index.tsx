"use client";
import { Fragment, useRef, useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Reorder } from "framer-motion";
import Pill from "./Pill/Pill";
import AddPageSeparator from "./AddPageSeparator/AddPageSeparator";
import { defaultPillClasses } from "./Pill/utils";
import { getNextPage, initialActivePage, initialPages } from "./utils";

const Navbar = () => {
  const [pages, setPages] = useState(initialPages);
  const [activePageId, setActivePageId] = useState(initialActivePage);
  const ref = useRef(null);

  const addPage = (pagePosition?: number) => {
    const nextItem = getNextPage(pages);

    if (nextItem) {
      setActivePageId(nextItem.id);

      const updatedPages = pages.toSpliced(pagePosition ?? pages.length, 0, nextItem);
      setPages(updatedPages);
    }
  };

  return (
    <div
      ref={ref}
      className="flex w-full p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0 overflow-y-hidden">
      <Reorder.Group as="div" className="flex" axis="x" onReorder={setPages} values={pages}>
        {pages.map((page, index) => (
          <Fragment key={page.id}>
            <Pill isActive={activePageId === page.id} page={page} onClick={setActivePageId} />
            <AddPageSeparator
              onAddClick={() => {
                addPage(index + 1);
              }}
              showButton={index !== pages.length - 1}
            />
          </Fragment>
        ))}
      </Reorder.Group>
      <button
        className={`${defaultPillClasses} bg-white hover:bg-white/35 text-primaryText shadow-mini min-w-28`}
        onClick={() => addPage()}>
        <PlusIcon className="size-5 mr-1.5" />
        Add page
      </button>
    </div>
  );
};

export default Navbar;
