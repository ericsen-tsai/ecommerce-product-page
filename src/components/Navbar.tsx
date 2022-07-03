import { Dispatch, SetStateAction } from "react"
import Close from "../images/icon-close.svg"

import "./Navbar.scss"

const pages: string[] = ["Collections", "Men", "Women", "About", "Contact"]

const Navbar = ({
  toggleOpen,
}: {
  toggleOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const navItems = pages.map((page) => {
    return (
      <li className="nav__item" key={page}>
        <a href="#" className="nav__link">
          {page}
        </a>
      </li>
    )
  })

  return (
    <nav className="nav">
      <img
        className="nav__close"
        src={Close}
        alt="icon close"
        onClick={() => toggleOpen(false)}
      ></img>
      <ul className="nav__list">{navItems}</ul>
    </nav>
  )
}

export default Navbar
