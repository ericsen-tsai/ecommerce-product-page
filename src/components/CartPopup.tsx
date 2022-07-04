import React from "react"

import Thumbnail from "../images/image-product-1-thumbnail.jpg"
import GarbageCan from "../images/icon-delete.svg"

import "./CartPopup.scss"

const CartPopup = ({ quantity, setQuantity }: CartPopupProps) => {
  return (
    <div className="cart-popup">
      <div className="cart-popup__text-box">
        <h5 className="cart-popup__text">Cart</h5>
      </div>
      <div className="cart-popup__checkout">
        {quantity === 0 ? (
          <div className="cart-popup__text-box cart-popup__text-box--empty">
            <p className="cart-popup__text cart-popup__text--empty">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <>
            <div className="cart-popup__product">
              <img
                src={Thumbnail}
                alt="product-thumbnail"
                className="cart-popup__product-thumbnail"
              />
              <div className="cart-popup__receipt">
                <p className="cart-popup__product-name">
                  Fall Limited Edition Sneakers
                </p>
                <p className="cart-popup__receipt-sumup">
                  $125.00 x {quantity}{" "}
                  <span className="cart-popup__total">
                    ${125 * quantity}.00
                  </span>
                </p>
              </div>
              <img
                src={GarbageCan}
                alt="garbage-can"
                className="cart-popup__icon"
                onClick={() => setQuantity(0)}
              />
            </div>
            <div className="cart-popup__button-box">
              <button className="btn" type="button">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

interface CartPopupProps {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default CartPopup
