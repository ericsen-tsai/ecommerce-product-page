import React, { useEffect } from "react"

const useClickOutsideToClose = (
  ref: React.RefObject<HTMLElement>,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!ref) return

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement))
        setIsOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

export { useClickOutsideToClose }
