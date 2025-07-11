import React, { useRef, useState } from "react";
import {
  CheckCircleIcon,
  DocumentTextIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Reorder } from "framer-motion";
import { IPage, PageTypes } from "../utils";
import SettingsOptions from "./SettingsOptions";
import { defaultPillClasses } from "./utils";

interface Props {
  page: IPage;
  onClick: (id: number) => void;
  isActive?: boolean;
}

const Pill = ({ page, onClick, isActive = false }: Props) => {
  const { text, id, type } = page;
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
    ? "bg-white text-primaryText focus:border focus:border-blue focus:ring-[1.5px] focus:ring-blue/25 shadow-mini"
    : "bg-gray/15 text-waikawaGray hover:bg-gray/35";
  const iconColor = isActive ? "text-tangerine" : "text-manateeGray";

  return (
    <>
      <Reorder.Item
        ref={ref}
        as="div"
        value={page}
        role="button"
        className={`${defaultPillClasses} ${pillColors}`}
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.preventDefault();
          onClick(id);
          setIsSettingsOpen(false);
        }}>
        <Icon className={`${iconColor} size-5 mr-1.5`} />

        {text}

        {isActive ? (
          <>
            <button
              className="ml-1.5 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsSettingsOpen(!isSettingsOpen);
              }}>
              <EllipsisVerticalIcon className="size-5 text-gray" />
            </button>
          </>
        ) : null}
      </Reorder.Item>
      {isSettingsOpen ? (
        <SettingsOptions containerRef={ref} isOpen setIsOpen={setIsSettingsOpen} />
      ) : null}
    </>
  );
};

export default Pill;
