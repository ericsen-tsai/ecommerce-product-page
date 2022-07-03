import { useState } from "react"

import Navbar from "./Navbar"

import Hamburger from "../images/icon-menu.svg"
import Logo from "../images/logo.svg"
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"

import "./Header.scss"

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [productQuantity, setProductQuantity] = useState<number>(1)

  return (
    <header className="header">
      {isOpen && <Navbar toggleOpen={setIsOpen} />}
      <div className="header__img-box">
        <img
          src={Hamburger}
          alt="hamburger"
          className="header__img header__img--hamburger"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="header__img-box header__img-box">
        <img src={Logo} alt="logo" className="header__img header__img--logo" />
      </div>
      <div className="header__img-box header__img-box--cart">
        <img src={Cart} alt="cart" className="header__img" />
        {productQuantity === 0 ? (
          <></>
        ) : (
          <p className="header__quantity">{productQuantity}</p>
        )}
      </div>
      <div className="header__img-box">
        <img src={Avatar} alt="avatar" className="header__img " />
      </div>
    </header>
  )
}

export default Header