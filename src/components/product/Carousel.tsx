import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"

import "./Carousel.scss"

import ImageOne from "../../images/image-product-1.jpg"
import ImageTwo from "../../images/image-product-2.jpg"
import ImageThree from "../../images/image-product-3.jpg"
import ImageFour from "../../images/image-product-4.jpg"
import Next from "../../images/icon-next.svg"
import Previous from "../../images/icon-previous.svg"
import Close from "../../images/icon-close.svg"

const images: string[] = [ImageOne, ImageTwo, ImageThree, ImageFour]

type TPosition = 1 | 2 | 3 | 4

const Carousel = () => {
  const [position, setPosition] = useState<TPosition>(1)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const isPhone: boolean = useMediaQuery({ query: "(max-width: 37.5em)" })

  const roll = (dir: 1 | -1) => {
    let nextPos = position + dir
    if (nextPos === 5) nextPos = 1
    if (nextPos === 0) nextPos = 4
    setPosition(nextPos as TPosition)
  }

  const imageGrids = images.map((image: string, ind) => {
    return (
      <div
        className={`grid__img-box ${
          position === ind + 1 ? "grid__img-box--selected" : ""
        }`}
        key={`product-grid-${ind + 1}`}
        data-id={ind + 1}
        onClick={(e) => {
          setIsModalOpen(true)
          setPosition(
            Number(e.currentTarget.getAttribute("data-id")) as TPosition
          )
        }}
      >
        <img
          src={image}
          alt={`product-grid-${ind + 1}`}
          className={"grid__img"}
        />
      </div>
    )
  })

  return (
    <div className="carousel">
      {(isPhone || isModalOpen) && (
        <div className="carousel__modal">
          {!isPhone && (
            <img
              src={Close}
              alt="close"
              className="carousel__modal-close"
              onClick={() => setIsModalOpen(false)}
            />
          )}
          <img
            src={images[position - 1]}
            alt="product"
            className="carousel__img"
          />
          <div
            className="carousel__roll carousel__roll--backward"
            onClick={() => roll(-1)}
          >
            <img src={Previous} alt="previous" className="carousel__icon" />
          </div>
          <div
            className="carousel__roll carousel__roll--forward"
            onClick={() => roll(1)}
          >
            <img src={Next} alt="next" className="carousel__icon" />
          </div>

          {!isPhone && <div className="grid">{imageGrids}</div>}
        </div>
      )}
      {!isPhone && (
        <div className="carousel__display">
          <div className="grid">
            <div className="grid__img-box grid__img-box--main">
              <img
                src={images[position - 1]}
                alt="product-grid-main"
                className="grid__img"
              />
            </div>
            {imageGrids}
          </div>
        </div>
      )}
    </div>
  )
}

export default Carousel
