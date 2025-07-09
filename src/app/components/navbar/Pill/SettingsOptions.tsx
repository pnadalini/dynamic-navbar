import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { FlagIcon } from "@heroicons/react/20/solid";
import { useCloseOnClickOrEscape } from "@/app/common/hooks/useCloseOnClickOrEscape";

const defaultSettingsHeight = 236;
const settingsGap = 9;

interface Props {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsOptions = ({ containerRef, isOpen, setIsOpen }: Props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const settingsRef = useRef<HTMLDivElement>(null);

  useCloseOnClickOrEscape(settingsRef, setIsOpen);

  useEffect(() => {
    if (containerRef.current) {
      const settingsHeight =
        settingsRef.current?.getBoundingClientRect()?.height || defaultSettingsHeight;
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom - settingsGap - settingsHeight - rect.height,
        left: rect.left,
      });
    }
  }, [containerRef, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={settingsRef}
      className="z-10 bg-white text-primaryText border border-border rounded-xl shadow-mini w-56 text-sm fixed top-0 left-0"
      style={{
        transform: `translate(${position.left}px, ${position.top}px)`,
      }}>
      <div className="bg-aliceBlue border-b border-border rounded-t-xl p-3">
        <span className="text-base">Settings</span>
      </div>
      <div className="p-3 space-y-3">
        <p className="flex items-center cursor-pointer">
          <FlagIcon className="size-4 text-blue mr-2" /> Set as first page
        </p>
        <p className="flex items-center cursor-pointer">
          <PencilSquareIcon className="size-4 text-gray mr-2" /> Rename
        </p>
        <p className="flex items-center cursor-pointer">
          <ClipboardIcon className="size-4 text-gray mr-2" /> Copy
        </p>
        <p className="flex items-center cursor-pointer">
          <DocumentDuplicateIcon className="size-4 text-gray mr-2" /> Duplicate
        </p>
        <hr className="border-border" />
        <p className="flex items-center cursor-pointer text-red">
          <TrashIcon className="size-4 mr-2" /> Delete
        </p>
      </div>
    </div>
  );
};

export default SettingsOptions;
