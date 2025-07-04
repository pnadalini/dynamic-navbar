import React from "react";
import { PageTypes } from "../types";
import SettingsOptions from "./SettingsOptions";
import {
  CheckCircleIcon,
  DocumentTextIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface Props {
  children: React.ReactNode;
  isActive: boolean;
  type: PageTypes;
}

const Pill = ({ children, type, isActive }: Props) => {
  const Icon = (() => {
    const iconMap = {
      [PageTypes.Info]: InformationCircleIcon,
      [PageTypes.Document]: DocumentTextIcon,
      [PageTypes.Ending]: CheckCircleIcon,
    };
    return iconMap[type] || DocumentTextIcon;
  })();

  const pillColors = isActive
    ? "bg-white text-primaryText focus:border focus:border-blue focus:ring-[1.5px] focus:ring-blue/25"
    : "bg-gray/15 text-waikawaGray hover:bg-gray/35";
  const iconColor = isActive ? "text-tangerine" : "text-manateeGray";

  return (
    <div
      role="button"
      className={`flex items-center px-2.5 py-1 border border-border rounded-lg cursor-pointer text-sm ${pillColors}`}>
      <Icon className={`${iconColor} size-5 mr-1.5`} />

      {children}
      {isActive ? <SettingsOptions /> : null}
    </div>
  );
};

export default Pill;
