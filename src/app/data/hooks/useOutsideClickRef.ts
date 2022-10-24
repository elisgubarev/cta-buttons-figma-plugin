import { useEffect, useRef } from "react";
import { assertIsNode } from "./../helpers/assertIsNode";

export const useOutsideClickRef = (callback: Function) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      assertIsNode(event.target);
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return ref;
};
