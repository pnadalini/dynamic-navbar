"use client";
import React, { useState } from "react";
import Pill from "./Pill/Pill";
import { PageTypes } from "./types";

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
  const [pages] = useState(initialPages);
  return (
    <div className="flex w-full h-20 p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0 space-x-2">
      {pages.map((page) => {
        const { id, ...rest } = page;

        return <Pill key={id} {...rest} />;
      })}
    </div>
  );
};

export default Navbar;
