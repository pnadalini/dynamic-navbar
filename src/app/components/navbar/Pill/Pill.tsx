import React, { useRef, useState } from "react";
import { PageTypes } from "../types";
import SettingsOptions from "./SettingsOptions";
import {
  CheckCircleIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { defaultPillClasses } from "./utils";

interface Props {
  children: React.ReactNode;
  id: number;
  isActive?: boolean;
  type: PageTypes;
  onClick: (id: number) => void;
}

const Pill = ({ children, id, type, onClick, isActive = false }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const Icon = (() => {
    const iconMap = {
      [PageTypes.Info]: InformationCircleIcon,
      [PageTypes.Document]: DocumentTextIcon,
      [PageTypes.Ending]: CheckCircleIcon,
    };
    return iconMap[type] || DocumentTextIcon;
  })();

  const pillColors = isActive
    ? "bg-white text-primaryText focus:border focus:border-blue focus:ring-[1.5px] focus:ring-blue/25 cursor-default shadow-mini"
    : "bg-gray/15 text-waikawaGray hover:bg-gray/35 cursor-pointer";
  const iconColor = isActive ? "text-tangerine" : "text-manateeGray";

  return (
    <div
      ref={ref}
      role="button"
      className={`${defaultPillClasses} ${pillColors}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
        setIsSettingsOpen(false);
      }}>
      <Icon className={`${iconColor} size-5 mr-1.5`} />

      {children}

      {isActive ? (
        <>
          <button
            className="ml-1.5 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setIsSettingsOpen(!isSettingsOpen);
            }}>
            <EllipsisVerticalIcon className="size-6 text-gray" />
          </button>
          <SettingsOptions containerRef={ref} isOpen={isSettingsOpen} />
        </>
      ) : null}
    </div>
  );
};

export default Pill;
