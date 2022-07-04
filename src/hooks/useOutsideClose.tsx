import { useEffect } from "react"

const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
  if (!ref) return

  // FIXME
  useEffect(() => {
    const handleClickOutside = (
      event: React.MouseEvent<Element, MouseEvent>
    ) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        alert("You clicked outside of me!")
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}
