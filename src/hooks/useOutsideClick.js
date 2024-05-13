import { useEffect, useRef } from "react";

export function useOutsideClick(close, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }
    document.addEventListener("click", handleClickOutside, listenCapturing);

    return;
  }, [close, listenCapturing]);

  return ref;
}
