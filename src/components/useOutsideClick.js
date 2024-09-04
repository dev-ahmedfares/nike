import { useEffect, useRef } from "react";

function useOutsideClick( handleClose,handleCapturing = false ) {
  const ref = useRef();

  useEffect(() => {
    function handleCloseModel(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handleClose();
      }
    }
    document.addEventListener("click", handleCloseModel,handleCapturing);
    return () => document.removeEventListener("click", handleCloseModel,handleCapturing);
  },[handleClose]);

  return ref
}


export {useOutsideClick} 