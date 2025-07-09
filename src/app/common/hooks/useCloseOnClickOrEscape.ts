import { RefObject, useEffect } from "react";

export const useCloseOnClickOrEscape = <T extends HTMLElement | null>(
  ref: RefObject<T>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyPress(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [ref, setIsOpen]);
};
