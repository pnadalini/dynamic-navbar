import React from "react";
import Pill from "./Pill";

const Navbar = () => {
  return (
    <div className="flex w-full h-20 p-5 bg-aliceBlue border border-border absolute bottom-0 left-0 right-0">
      <Pill>Info</Pill>
      <Pill>Details</Pill>
      <Pill>Other</Pill>
      <Pill>Ending</Pill>
    </div>
  );
};

export default Navbar;
