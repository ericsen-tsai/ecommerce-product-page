import { useState } from "react"

import { useQuantityContext } from "../../context/QuantityContext"

import Plus from "../../images/icon-plus.svg"
import Minus from "../../images/icon-minus.svg"
import Cart from "../../images/icon-cart.svg"

import "./Details.scss"

const Details = () => {
  const { quantity, setQuantity } = useQuantityContext()

  const [number, setNumber] = useState<number>(0)

  const handleSetNumber = (n: 1 | -1 | 0) => {
    if (number === 0 && n === -1) n = 0
    setNumber(number + n)
  }

  const handleAddToCart = () => {
    if (number === 0) return
    setQuantity(quantity + number)
    setNumber(0)
  }

  return (
    <div className="details">
      <div className="details__description">
        <h5 className="details__company">sneaker company</h5>
        <h2 className="details__title">Fall Limited Edition Sneakers</h2>
        <p className="details__text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
      </div>
      <div className="details__value">
        <div className="details__value-flex-box">
          <h3 className="details__value-number">$125.00</h3>
          <p className="details__discount">50%</p>
        </div>

        <p className="details__discount-number">$250.00</p>
      </div>
      <div className="details__cta">
        <div className="details__cta-box">
          <div
            className="details__cta-icon-box"
            onClick={() => handleSetNumber(-1)}
          >
            <img className="details__cta-icon--minus" src={Minus} alt="minus" />
          </div>
          <div className="details__cta-display-box">
            <p className="details__cta-display">{number}</p>
          </div>
          <div
            className="details__cta-icon-box"
            onClick={() => handleSetNumber(1)}
          >
            <img className="details__cta-icon--plus" src={Plus} alt="plus" />
          </div>
        </div>
        <button className="btn" type="button" onClick={handleAddToCart}>
          <img src={Cart} alt="details-cart" className="details__icon-cart" />
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Details
