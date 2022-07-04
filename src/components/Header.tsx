import { useState } from "react"
import { useMediaQuery } from "react-responsive"

import Navbar from "./Navbar"
import CartPopup from "./CartPopup"

import Hamburger from "../images/icon-menu.svg"
import Logo from "../images/logo.svg"
import Cart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"

import "./Header.scss"

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)
  const isPhone: boolean = useMediaQuery({ query: "(max-width: 37.5em)" })
  const [productQuantity, setProductQuantity] = useState<number>(1)

  return (
    <header className="header">
      {(isNavOpen || !isPhone) && <Navbar toggleOpen={setIsNavOpen} />}
      {isPhone && (
        <div className="header__img-box">
          <img
            src={Hamburger}
            alt="hamburger"
            className="header__img header__img--hamburger"
            onClick={() => setIsNavOpen(true)}
          />
        </div>
      )}
      <div className="header__img-box header__img-box--logo">
        <img src={Logo} alt="logo" className="header__img header__img--logo" />
      </div>
      <div className="header__img-box header__img-box--cart">
        <img
          src={Cart}
          alt="cart"
          className="header__img"
          onClick={() => setIsPopupOpen(!isPopupOpen)}
        />
        {productQuantity === 0 ? (
          <></>
        ) : (
          <p className="header__quantity">{productQuantity}</p>
        )}
      </div>
      <div className="header__img-box header__img-box--avatar">
        <img
          src={Avatar}
          alt="avatar"
          className="header__img header__img--avatar"
        />
      </div>
      {isPopupOpen && (
        <CartPopup
          quantity={productQuantity}
          setQuantity={setProductQuantity}
          setIsOpen={setIsPopupOpen}
        />
      )}
    </header>
  )
}

export default Header
